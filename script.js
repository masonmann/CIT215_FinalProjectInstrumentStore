var app = new Vue({
  el: "#app",
  data:{ 
    ItemName:"",
    ItemType:"",
    ItemCost:"",
    ItemBrand:"",
    ItemImage:"no-image",
    PopUp:{},
    ShoppingCart:"", 
    PopUpDisplay:false,
    FormDisplay:false,

      Items: [
      {
        Name:"American Ultra Jazz Bass® V",
        Price:"$2,099.99",
        Type:"5 String",
        Brand:"Fender",
        Img:"https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0199030712_gtr_cntbdyright_002_nr.jpg"
      },
       
      {
        Name:"American Acoustasonic® Stratocaster® Ziricote",
        Price:"$3,299.99",
        Type:"Acoustic",
        Brand:"Fender",
        Img:"https://www.fmicassets.com/Damroot/ThumbnailJpg/10001/0972023097_fen_ins_cbr_1_nr.jpg"
      },
      
      
      {
        Name:"CX SERIES C7X",
        Price:"$82,999.00",
        Type:"Grand Piano",
        Brand:"Yamaha",
        Img:"https://www.yamaha.com/us/pianos/images/c7x.jpg"      
      },
      {
        Name:"YHR-601",
        Price:"$2,377.99",
        Type:"French Horn",
        Brand:"Yamaha",
        Img:"https://www.yamaha.com/yamahavgn/PIM/Images/80141601A8494A07858A013BC18A368F_12073_735x735_9a166f06aa6881ba96c0360044cfd4f6_MEDPROC_.jpg"
      },
      {
        Name:"Martin C1K Concert Ukulele",
        Price:"$509.00",
        Type:"String",
        Brand:"Maton",
        Img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQEYSZzjlSuQjdyVp7IYQ6qx7fWBC6euRvMtaS9KdUC7QGLQddPaoc8ScowWItvVamlSHqd-8xN_tZLWPT_vIYsVWkLPe0Vwgm2iefSC1BBHlUxidOne_w&usqp=CAE"
      },
      {
        Name:"Ortega Hydra Neck Ukulele",
        Price:"$399.99",
        Type:"String",
        Brand:"Maton",        Img:"https://images.reverb.com/image/upload/s--6whjt4F1--/f_auto,t_large/v1575516194/uh1zq4dabhek9h2fzqvq.jpg"
      }
    ],

  },
  methods:{
    AddtoCart: function(index){
      this.ShoppingCart.push(this.Items[index]);
      this.Items.splice(index, 1);
    },
    AddItem:function(){
      this.FormDisplay=!this.FormDisplay;
    },
    Popup:function(item){
      this.PopUpDisplay=!this.PopUpDisplay;
      this.PopUp=item;
    },
    Submit:function(){
      this.Items.push({
        Name:this.ItemName,
        Price:this.ItemCost,
        Type:this.ItemType,   
        Brand:this.ItemBrand,
        Image:this.ItemImage,
        ItemImage:true
      }),
      this.FormDisplay=!this.FormDisplay;
    },
    Remove:function(){
      this.Items=this.Items.concat(this.ShoppingCart);
      this.ShoppingCart=[];
    }
  }
});