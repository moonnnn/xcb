import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index"
import Money from "../money/index"
import Ious from "../ious/index"
import Raise from "../raise/index"
import My from "../my/index"
import Download from "../special/download"
import ZC from "../zhongchou/index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }, {
      path: "/money",
      name: "money",
      component: Money
    }, {
      path: "/ious",
      name: "ious",
      component: Ious
    }, {
      path: "/raise",
      name: "raise",
      component: Raise
    },
    {
      path: "/my",
      name: "my",
      component: My
    },
    {
      path: "/download",
      name: "download",
      component: Download
    },
    {
      path: "/zc",
      name: "zc",
      component: ZC
    }
  ]
})
