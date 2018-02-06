const _layouttemplate= [
			{ "x":0,"y":0,"w":4,"h":6,"i":"0","c":"PRO-01"},
			{ "x":0,"y":6,"w":4,"h":6,"i":"1","c":"SM-01"},
			{ "x":4,"y":0,"w":4,"h":6,"i":"2","c":"PRO-04"},
			{ "x":0,"y":12,"w":4,"h":6,"i":"3","c":"SM-04"},
			{ "x":8,"y":0,"w":4,"h":6,"i":"4","c":"PRO-02"},
			{ "x":4,"y":6,"w":8,"h":12,"i":"5","c":"PRO-03"}
 		]
// initial state
const state = {
  defaultlayoutlist: [{"cancertype":0,"layout":[
		{ "x":3,"y":0,"w":3,"h":3,"i":"0","c":"PRO-04"},
		{ "x":6,"y":0,"w":3,"h":3,"i":"1","c":"PRO-05"},
		{ "x":9,"y":6,"w":3,"h":3,"i":"2","c":"SM-05"},
		{ "x":3,"y":6,"w":3,"h":3,"i":"3","c":"SM-06"},
		{ "x":0,"y":6,"w":3,"h":3,"i":"4","c":"SM-04"},
		{ "x":9,"y":0,"w":3,"h":3,"i":"5","c":"PRO-12"},
		{ "x":0,"y":0,"w":3,"h":3,"i":"6","c":"PRO-07"},
		{ "x":6,"y":6,"w":3,"h":3,"i":"7","c":"SM-08"}
			]},
		{"cancertype":1,"layout":[
				{ "x":3,"y":0,"w":3,"h":3,"i":"0","c":"PRO-04"},
				{ "x":6,"y":0,"w":3,"h":3,"i":"1","c":"PRO-05"},
				{ "x":9,"y":0,"w":3,"h":3,"i":"2","c":"PRO-06"},
				{ "x":0,"y":0,"w":3,"h":3,"i":"3","c":"PRO-07"},
				{ "x":0,"y":8,"w":3,"h":3,"i":"4","c":"PRO-08"},
				{ "x":3,"y":8,"w":3,"h":3,"i":"5","c":"PRO-10"},
				{ "x":6,"y":8,"w":3,"h":3,"i":"6","c":"PRO-12"},
				{ "x":3,"y":16,"w":3,"h":2,"i":"7","c":"SM-02"},
				{ "x":0,"y":16,"w":3,"h":2,"i":"8","c":"SM-01"},
				{ "x":9,"y":8,"w":3,"h":2,"i":"9","c":"SM-03"},
				{ "x":6,"y":16,"w":3,"h":2,"i":"10","c":"SM-07"}
			]}
		]
}
// getters
const getters = {
  getdefaultlayoutbycancerid:state=>{
    return function(id){
      var index = state.defaultlayoutlist.map(function(e){return e.cancertype}).indexOf(id)
      if(index!=-1){
        return state.defaultlayoutlist[index].layout
      }else {
        return {}
      }
    }
  }
}
// actions
const actions = {
}
// mutations
const mutations = {
	savedefaultlayout(state,obj) {
		var id=obj.cancerid;
		var index = state.defaultlayoutlist.map(function(e){return e.cancertype}).indexOf(id)
		if(index!=-1){
			state.defaultlayoutlist[index].layout=JSON.parse(JSON.stringify(obj.layout))
		}
	}
}
export default {
  state,
  getters,
  actions,
  mutations
}
