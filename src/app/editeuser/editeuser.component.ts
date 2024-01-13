import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-editeuser',
  templateUrl: './editeuser.component.html',
  styleUrls: ['./editeuser.component.css'],
})
export class EditeuserComponent implements OnInit {
  Userform!: FormGroup;
  user!: User[];
  userID!: number;

  constructor(
    private formbuilder: FormBuilder,
    private userserv: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.Userform = this.formbuilder.group({
      firstname: ['', [Validators.required]],
      id: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userID = +params['id'];
      this.userserv.getUserById(this.userID).subscribe((user) => {
        this.Userform.patchValue({
          firstname: user!.firstname,
          id: user!.id,
          lastname: user!.lastname,
          email: user!.email,
        });
      });
    });
  }

  update() {
    console.log(this.Userform.value);
    this.userserv.updateUser(this.Userform.value);
    this.router.navigate(['']);
  }
}
