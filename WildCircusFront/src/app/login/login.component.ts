import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { TestService } from '../services/test.service';
import { Perf } from '../performance';
import { PerfService } from '../services/perf.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	hide = true;
	newUser: User = {
		email: 'default@mail.net',
		username: 'defaultName',
		password: 'defaultPassword',
		profilepicture: 'https://via.placeholder.com/250?text=Icon'
	};
	inputEmail: string;
	inputUsername: string;
	inputPassword: string;
	inputProfilepicture: string;
	inputIntroduction: string;
	inputIsArtist: number;
	newPerformance: Perf = {
		name: 'default',
		description: 'default',
		user: this.newUser,
		icon: 'https://via.placeholder.com/450?text=Icon',
		latitude: 0,
		longitude: 0,
		date: 11 / 11 / 2011
	};
	inputPerfName: string;
	inputPerfDesc: string;
	inputPerfLat: number;
	inputPerfLong: number;
	inputPerfDate: number;
	addUser() {
		this.newUser.email = this.inputEmail;
		this.newUser.username = this.inputUsername;
		this.newUser.password = this.inputPassword;
		this.newUser.profilepicture = this.inputProfilepicture;
		this.newUser.introduction = this.inputIntroduction;
		if (this.inputIsArtist == 2) {
			this.newUser.isArtist = true;
		}
		this.newPerformance.user = this.newUser;
		this.newPerformance.name = this.inputPerfName;
		this.newPerformance.description = this.inputPerfDesc;
		this.newPerformance.latitude = this.inputPerfLat;
		this.newPerformance.longitude = this.inputPerfLong;
		this.newPerformance.date = this.inputPerfDate;
		this.perfService.createPerf(this.newPerformance).subscribe();

		this.userService.createUser(this.newUser).subscribe();
	}
	constructor(private userService: UserService, private perfService: PerfService) {}

	ngOnInit() {}
}
