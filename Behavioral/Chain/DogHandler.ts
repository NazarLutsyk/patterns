import {AbstractHandler} from './AbstractHandler';

export class DogHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === 'MeatBall'){
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}