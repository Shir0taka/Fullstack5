import { Routes } from '@angular/router';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'books', component: BooksComponent },
    { path: 'books/addbook', component: AddBookComponent },
    { path: 'register', component: RegisterComponent },
    
    //404
    { path: '**', component: NoPageComponent },
];

export class AppRoutingModule {}