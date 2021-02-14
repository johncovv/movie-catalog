import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	profileOpen: boolean = false;
	mobileMenuOpen: boolean = false;

	navItems: Array<{ title: string; link: string }> = [
		{
			title: 'user',
			link: '/user/johncovv',
		},
		{
			title: 'repositories',
			link: '/user/johncovv/repositories',
		},
	];

	toggleProfileMenu(): void {
		this.profileOpen = !this.profileOpen;
	}

	toggleMobileMenu(): void {
		this.mobileMenuOpen = !this.mobileMenuOpen;
	}
}
