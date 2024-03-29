import ChildComponent from '@/core/component/child.component';
import renderService from "@/core/services/render.service";
import { $R } from '@/core/rquery/rquery.lib';

import template from "./search.template.html";
import styles from "./search.module.scss";

export class Search extends ChildComponent{
    render() {
        this.element = renderService.htmlToElement(template,[],styles);

        $R(this.element).find('input').input({
            type: 'search',
            name: 'search',
            placeholder: 'Search contacts ...'
        })

        return this.element;
    }
}