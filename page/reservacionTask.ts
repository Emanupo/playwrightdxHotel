import { Page } from '@playwright/test'
import { ReservacionHotel } from '../resources/reservacion/reservaciuonUserInterface'

export class ReservacionTask {
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }
    async goto(){
        await this.page.goto('https://demos.devexpress.com/rwa/dxhotels/')
    }
    async reservacion(){
        await this.page.locator(ReservacionHotel.location).click();
        await this.page.locator(ReservacionHotel.select_location).click();
    }
}