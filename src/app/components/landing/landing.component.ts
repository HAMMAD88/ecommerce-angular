import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app-state';
import { loadLandingPageProducts } from './states/dashboard.actions';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.dispatch(loadLandingPageProducts());    
    }
}
