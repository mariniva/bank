import { BaseScreen } from '@/core/component/base-screen.component';
import { Heading } from '@/components/ui/heading/heading.component';
import renderService from '@/core/services/render.service';

import template from './auth.template.html';
import styles from './auth.module.scss';

export class Auth extends BaseScreen {
	constructor() {
		super({ title: 'Auth' });
	}
	render() {
		const element = renderService.htmlToElement(
			template,
			[new Heading('Auth')],
			styles
		);

		return element;
	}
}