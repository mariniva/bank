import { ROUTES } from "./routes.data";
import { NotFound } from "@/components/screens/not-found/not-found.component";
import { Layout } from "@/components/layout/layout.component";

export class Router {
    #routes = ROUTES;
    #currentRoute =null;
    #layout = null;

    constructor(){
        window.addEventListener('popstate',()=>{
            this.#handleRouteChange();
        })
        this.#handleRouteChange();
        this.#handleLinks();
    }

    getCurrentPath(){
        return window.location.pathname;
    }

    #handleRouteChange(){
        const path = this.getCurrentPath() || '/';
        let route = this.#routes.find(route => route.path === path);
        if (!route){
            route = {
                component: NotFound
            }
        }
        this.#currentRoute = route;

        this.#render();
    }

    #handleLinks(){
        document.addEventListener('click',(e)=>{
            const target = e.target.closest('a');
            if (target) {
                e.preventDefault();
                this.navigate(target.href);
            }
        })
    }

    navigate(path){
        if (path !== this.getCurrentPath()){
            window.history.pushState({},'',path);
            this.#handleRouteChange();
        }
    }

    #render(){
        const component = new this.#currentRoute.component();
        if (!this.#layout){
            this.#layout = new Layout({
                router: this,
                children: component.render()
            });
            document.getElementById('app').innerHTML = this.#layout.render();
        } else {
            document.querySelector('main').innerHTML = component.render();
        }
    }
}