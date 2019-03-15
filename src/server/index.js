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
        const context = {}
        const html = render(store,routes,req,context)
        if(context.action==='REPLACE'){
            res.redirect(301,context.url)           
        }
        else if(context.noPage){
            res.status(404)
            res.send(html)
        }else{
            res.send(html)
        }
        
    }).catch(()=>{
        const context = {}
        const html = render(store,routes,req,context)
        if(context.action==='REPLACE'){
            res.redirect(301,context.url)           
        }
        else if(context.noPage){
            res.status(404)
            res.send(html)
        }else{
            res.send(html)
        }
    })
}) 

app.listen(3000)