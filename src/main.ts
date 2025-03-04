import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ProductsService } from './app/products.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ProductsService
  ]
}).catch(err => console.error(err));