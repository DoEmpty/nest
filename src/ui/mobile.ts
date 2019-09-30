import Vue from "vue";
import { Popup, Image, Search, ImagePreview, Divider, List, PullRefresh } from "vant";
import "vant/lib/popup/style";
import "vant/lib/image/style";
import "vant/lib/notify/style";
import "vant/lib/search/style";
import "vant/lib/image-preview/style";
import "vant/lib/divider/style";
import "vant/lib/list/style";
import "vant/lib/pull-refresh/style";

Vue.use(Popup);
Vue.use(Image);
Vue.use(Search);
Vue.use(ImagePreview);
Vue.use(Divider);
Vue.use(List);
Vue.use(PullRefresh);

console.log("use mobile ui");
