import { trigger, transition, query, style, animate, group } from '@angular/animations';

export const MintRouterAnimations = trigger('mint-animation', [
    transition('void => *', [
        group([
            query(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('750ms ease',
                    style({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })
                )
            ], { optional: true })
        ])
    ]),
    transition('* <=> *', [
        group([
            query(':leave', [
                style({
                    opacity: 1,
                    transform: 'translateX(0%)',
                    overflow: 'hidden'
                }),
                animate('500ms ease',
                    style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    })
                )
            ], { optional: true }),
            query(':enter', [
                style({
                    position: 'fixed',
                    top: '4rem',
                    left: 0,
                    opacity: 0,
                    transform: 'translateX(-100%)',
                    overflow: 'hidden'
                }),
                animate('750ms ease',
                    style({
                        opacity: 1,
                        left: '50%',
                        transform: 'translateX(-50%)'
                    })
                )
            ], { optional: true })
        ])
    ])
]);
