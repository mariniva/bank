import { BaseScreen } from '@/core/component/base-screen.component';
import { $R } from '@/core/rquery/rquery.lib';
import renderService from '@/core/services/render.service';
import template from './home.template.html';
import styles from './home.module.scss';
import { Field } from '@/components/ui/field/field.component';
import { UserItem } from '@/components/ui/user-item/user-item.component';

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}
	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'text',
					placeholder: 'Enter email',
					variant: 'green'
				}),
				new UserItem({
					avatarPath: 'https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg',
					name: 'Marina'
				}, true, () => alert('Hey'))
			],
			styles
		);

		$R(element).find('h1').css('color', 'red');
		return element;
	}
}
