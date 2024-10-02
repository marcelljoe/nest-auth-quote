import { Injectable, Inject } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GMQService {
    constructor() { }

    async giveMeQ(){
        const quoteTd = await axios.get('https://api.kanye.rest/').then(res => res)
        console.log(quoteTd)
        return {quote: quoteTd.data.quote.toString()}
    }
}
