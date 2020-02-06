import { RouterModule, Routes}from '@angular/router'
import { AdminComp } from 'src/Core/admin.component'
import { ParentTemplate } from 'src/Core/ParentTemplate.component'

const routes:Routes =[
    {path:"Admin",component:AdminComp},
    {path:"",component:ParentTemplate},
]

export const routing = RouterModule.forRoot(routes);