import { Injectable } from "@nestjs/common";
// import * as moment from "moment"
// import * as crypto from "crypto";
// import * as bcrypt from "bcrypt"

@Injectable()
export class HelpersService {

    constructor(
    ) {
    }
    validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    validatePassword(password: string){
        if (!/[A-Z]/.test(password)) {
            return {
                isValid: false, 
                resp: "Password must have at least one uppercase letter."
            };
        }
        if (!/[a-z]/.test(password)) {
            return {
                isValid: false, 
                resp: "Password must have at least one lowercase letter."
            };
        }
        if (!/\d/.test(password)) {
            return {
                isValid: false, 
                resp: "Password must have at least one number."
            };
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return {
                isValid: false, 
                resp: "Password must have at least one special character."
            };
        }
        return {
            isValid: true, 
            resp: "Good Password."
        };
    }
}