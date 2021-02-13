import React from 'react'
import App from 'next/app'
// import Router from 'next/router'

// Import Font Styles
// You can find fonts at https://fonts.adobe.com/
// @import url('https://use.typekit.net/xxx.css');
// import '../styles/fonts.css'

// Add a custom scrollbar
// import '../styles/custom-scrollbar.css'

// Import Tailwind Styles
import '../styles/tailwind.css'
import '../styles/tailwind-custom.css'

import '../styles/globals.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    // const { route, query } = router
    // const { lang } = query

    // // This is an update that basically allows us to bypass
    // // the basic auth method if an error exists.
    // const errorCode = parseInt(router.route.split('/')[1])
    // const hasErrorCode = !isNaN(errorCode)

    // // // Page load handlers
    // Router.onRouteChangeStart = (url) => {
    //   console.log('<ROUTER> changing', url)
    //   console.log('<ROUTER> pageProps', pageProps)
    // }
    // Router.onRouteChangeComplete = () => {
    //   console.log('<ROUTER> change complete')
    //   // state.loading = false
    // }
    // Router.onRouteChangeError = () => {
    //   console.log('<ROUTER> change error')
    //   // state.loading = false
    // }
    // If an error exists, just return the component without basic auth
    //  if (hasErrorCode) {
    //   return (
    //     <AnimatePresence exitBeforeEnter>
    //       <motion.div initial="initial" animate="animate" exit="exit">
    //         <Component {...pageProps} key={route} />
    //       </motion.div>
    //     </AnimatePresence>
    //   )
    // }

    // let localeFont = useLocaleFont(lang)

    return <Component {...pageProps} />
  }
}

export default MyApp
