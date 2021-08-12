import ReactGA from 'react-ga';


export const hasPreviouslyConsented = () => {
    return document.cookie.includes("_ga")
}

// export const initialize = () => {
//     console.log('initialize')
//     ReactGA.initialize(process.env.REACT_APP_GA_ID ?? "");
//     console.log('rocess.env.REACT_APP_GA_ID ',process.env.REACT_APP_GA_ID )
//     pageView();
// }

export const pageView = (pageName?:string) => {
    if(!hasPreviouslyConsented) return;

    // @ts-ignore
    window.gtag('event', 'screen_view', {
        'app_name': 'isometricGrid',
        'screen_name' : 'Grid'
      });
}


