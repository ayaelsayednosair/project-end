import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, firstname: 'John', lastname: ' Doe', email: 'john@example.com' },
    { id: 2, firstname: 'John', lastname: ' Doe', email: 'john@example.com' },
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    return of(this.users.find((user) => user.id === id));
  }

  addUser(user: User): void {
    user.id = Math.max(...this.users.map((u) => u.id)) + 1;
    this.users.push(user);
  }
  updateUser(user: User): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
  deleteUser(id: number) {
    return (this.users = this.users.filter((user) => user.id !== id));
  }
}
