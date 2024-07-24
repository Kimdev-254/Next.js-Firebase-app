//  /src/pages/_app.js
import Navigation from 'components/Navigation';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div>
                <Navigation />
                <Component {...pageProps} />;
            </div>

        </>
    )
}

export default MyApp;
