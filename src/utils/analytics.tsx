import ReactGA from 'react-ga';


export const hasPreviouslyConsented = () => {
    console.log("cookie", document.cookie, document.cookie.includes("_ga"))
    return document.cookie.includes("_ga")
}

export const initialize = () => {
    console.log('initialize')
    ReactGA.initialize(process.env.REACT_APP_GA_ID ?? "");
    pageView();
}

export const pageView = (pageName?:string) => {
    ReactGA.pageview(pageName ?? window.location.pathname + window.location.search);
}


