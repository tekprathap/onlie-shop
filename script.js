// menu active

var menu=document.querySelector(".menu")
var ullist=document.querySelector(".ul-list")
menu.addEventListener("click",()=>{
    ullist.classList.toggle("active")
})

// cart active

var carts=document.querySelector(".cart")
var icons=document.querySelector(".icon")
var remecart=document.querySelector("#cart-close")

icons.addEventListener("click",()=>{
    carts.classList.add("cart-active")
})
remecart.addEventListener("click",()=>{
    carts.classList.remove("cart-active")
})
document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
  //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });
// 
  //Product Cart
  
  let cartBtns=document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  let carBtn=document.querySelectorAll("#btn")
  carBtn.forEach((Btn) => {
    Btn.addEventListener("click",addCart)
  });
  updateTotal();
}


//Remove Item
function removeItem(){
 

    if(confirm('Are Your Sure to Remove')){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        iTemlist=iTemlist.filter(el=>el.title!=title);
        this.parentElement.remove();
        loadContent();
      }
}

//Change Quantity
function changeQty(){
  if(isNaN(this.value) || this.value<1){
    this.value=1;
  }
  loadContent();
}
let iTemlist=[]
function addCart(){
    let food=this.parentElement;
    let title=food.querySelector('.productname').innerHTML;
    let price=food.querySelector('.price').innerHTML;
    let imgSrc=food.querySelector('#cardimg').src;
    console.log(title,price,imgSrc);
    
    let newProduct={title,price,imgSrc}

    if (iTemlist.find((el)=>el.title==newProduct.title)) {
        return
        
    }
    else{
        iTemlist.push(newProduct)
    }
   
    //Check Product already Exist in Cart
   
   
   
   let newProductElement= createCartProduct(title,price,imgSrc);
   let element=document.createElement('div');
   element.innerHTML=newProductElement;
   let cartBasket=document.querySelector('.cart-content');
   cartBasket.append(element);
   loadContent();
   }
   
   
   function createCartProduct(title,price,imgSrc){
   
     return `
     <div class="cart-box">
     <img src="${imgSrc}" class="cart-img">
     <div class="detail-box">
       <div class="cart-food-title">${title}</div>
       <div class="price-box">
         <div class="cart-price">${price}</div>
          <div class="cart-amt">${price}</div>
      </div>
       <input type="number" value="1" class="cart-quantity">
     </div>
     <ion-icon name="trash" class="cart-remove">${"🗑️"}</ion-icon>
   </div>
     `;
   }

  
function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;


  // Add Product Count in Cart Icon
  const cartCount=document.querySelector('.cart-count');
  let count=iTemlist.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }



}

// emailvalidation

var form=document.querySelector("#form")
var email=document.querySelector("#email")

form.addEventListener("submit",(e)=>{
e.preventDefault()
validation()
})

function validation() {
   const valueemail=email.value.trim()
   if (valueemail==="") {
  
    seterror(email,"hi")
   }
   else{
    
    setsuccess(email)
   }
}

function seterror(element) {
    let groupselet=element.parentElement
  

    groupselet.classList.add("error")
    groupselet.classList.remove("succes")
}
function setsuccess(element) {
    let groupselet=element.parentElement
  

   
    groupselet.classList.add("succes")
    groupselet.classList.remove("error")
}

  