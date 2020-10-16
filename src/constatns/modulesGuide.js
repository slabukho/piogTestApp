import AuthPage from '../modules/auth'
import News from '../modules/NewsPage'


export default {
    notAuth:{
        news:{
            path:'/news',
            component: News
        }
    },
    auth:{
        auth:{
            path:'/login',
            component:AuthPage
        }
    }
}