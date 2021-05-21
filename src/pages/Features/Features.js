import { Helmet } from 'react-helmet-async';
import { metaData } from '../../utils/MetaData';

export default function Features() {

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Features | Tetherer</title>
                <meta
                    name='description'
                    content=''
                    data-react-helmet='true'
                />
                <meta name='keywords' content='' />
                <link rel="canonical" href={process.env.REACT_APP_WEB_URL + '/features'} />
                <script className='structured-data-list' type="application/ld+json">{metaData()}</script>
            </Helmet>
            <main>
                <div className="container mx-auto px-6 2xl:px-40">
                    {/* Content Here */}
                </div>
                <h1>Features</h1>
            </main>
        </div>
    )
}