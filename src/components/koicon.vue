<template>
		<div class="container kgl-icon"
		  :class="{ active: object.count>=0 , pro:object.id.includes('PRO'), sm:object.id.includes('SM'), tro:object.id.includes('TRO'), trs:object.id.includes('TRS')}"
			v-bind:id="object.id">
			<p :style="fontStyles">{{object.label}}</p>
			<div class="badge" v-show='object.count>0'>
				<p class='ft-sz-10'>{{object.count}}</p>
			</div>
		</div>
</template>
<script>
	export default {
		name:	"koicon",
		props : [ 'object'],
		created: function(){
		},
		computed : {
			fontStyles () {
				var l = this.object.label.length;
				var ftsz='12px';
				if (l>9)  {	ftsz='11px'		}
				if (l>20) { ftsz='10px' 	}
				if (l>27) { ftsz='8px'		}
				return {'font-size': `${ftsz}`}
			}
		}
	};
</script>
<style scoped>
	.kgl-icon .badge{
		position: absolute;
		right: -5px;
		top: -5px;
		color: #fff;
		background-color:#bc2526;
		border-radius:100%;
	}
	.kgl-icon p {
		font-size: 11px;
		color: #fff;
	}
	ul li {
		display:table-cell;
	}
	.kgl-icon {
		position: relative;
    text-align: center;
		max-width: 92px;
		height: 50px;
    background-color: #f7f7f7;
		color: #fff;
	  font-weight: 400;
	  border: 1px solid #fff;
		border-radius: 5px;
	  padding: 0px ;
		margin:0px 5px;
		text-transform: uppercase;
		transition: all 0.5s ease;
	}
	.kgl-icon.active.pro {
		background-color: #853754;
		color: #fff;
	}
	.kgl-icon.active.sm {
		background-color: #20657e;
		color: #fff;
	}
	.kgl-icon.active.tro{
		background-color: #ba5827;
		color: #fff;
	}
	.kgl-icon.active.trs {
		background-color: #00b5AF;
		color: #fff;
	}
	.kgl-icon>p {
		position:relative;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
</style>
