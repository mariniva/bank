import ChildComponent from '@/core/component/child.component';
import renderService from '@/core/services/render.service';

import template from './header.template.html';
import styles from './header.module.scss';
import { Logo } from './logo/logo.component';
import { Search } from './search/search.component';
import { LogoutButton } from './logout-button/logout-button.component';
import { UserItem } from '@/components/ui/user-item/user-item.component';

export class Header extends ChildComponent {
	constructor({router}){
		super();

		this.router = router;
	}
	render() {
		this.element = renderService.htmlToElement(template, [
			new Logo(),
			new Search(),
			new LogoutButton({
				router: this.router
			}),
			new UserItem({
				avatarPath: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg',
				name: 'Marina'
			})
		], styles);
		return this.element;
	}
}
