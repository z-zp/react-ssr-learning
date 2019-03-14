import express from 'express'
import {render} from './utils'
import proxy from 'express-http-proxy'
import {getStore} from '../store'
import {matchRoutes} from 'react-router-config'
import routes from '../Routes'

const app = express();
app.use(express.static('public'))


app.use('/api',proxy('http://39.105.161.0',{
    proxyReqPathResolver: function (req) {
        console.log(req.url)
        return '/api'+req.url
    }
}));
app.get('*', function(req, res) {
    const store =getStore()
    const matchedRoutes = matchRoutes(routes,req.path);
    const promises = []
    matchedRoutes.forEach(item=>{
        if(item.route.loadData ){
            promises.push(item.route.loadData(store))
        }
    })
    Promise.all(promises).then((data)=>{
        console.log('store',store,data)
        console.log(store.getState())
        res.send(render(store,routes,req))
    })
}) 

app.listen(3000)