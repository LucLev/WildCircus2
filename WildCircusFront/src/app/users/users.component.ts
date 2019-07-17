import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
    showMore:boolean
    displayedUser:User
    users:User[];
    user: User = {
        id:0,
        email:'sas@sas.sas',
        username:'joj',
        profilepicture:'https://via.placeholder.com/450?text=Icon',
        introduction:'hey ( ͡° ͜ʖ ͡°)',
        isArtist:true,
    }
    showUser(user?:User){
        if(this.showMore == true){
            this.showMore = false;
        }else{
            this.showMore = true;
            this.displayedUser = user;
        }
    }

    constructor(userService:UserService) {
        userService.getAllUser().subscribe(
            (user: User[]) => {
                this.users = user;
              }
        )
        this.users = []
    }

	ngOnInit() {
    }
}
