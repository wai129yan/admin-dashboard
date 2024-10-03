let list = document.querySelectorAll(".navigation li");

function activeLink(){
   list.forEach((item ) => { item.classList.remove("hovered");
});
    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

// menu toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

// navigation.classList.toggle("active"); ကို ဗမာလို ရှင်းပြခြင်း

// ဒီ code က navigation element ရဲ့ class list ထဲမှာ "active" ဆိုတဲ့ class ကို toggle လုပ်ပေးပါတယ်။
// Toggle ဆိုတာက ရှိရင်ဖျက်၊ မရှိရင်ထည့် ဆိုတဲ့သဘောပါ။

// ဥပမာ - navigation element မှာ "active" class မရှိသေးဘူးဆိုရင် ထည့်ပေးလိုက်မယ်။
// ဒါမှမဟုတ် "active" class ရှိနေပြီးဆိုရင်တော့ ဖျက်ပေးလိုက်မယ်။

// ဒီလိုလုပ်ခြင်းအားဖြင့် navigation ရဲ့ ပုံစံကို အလွယ်တကူ ပြောင်းလဲနိုင်ပါတယ်။
// ဥပမာ - navigation ကို ဖွင့်/ပိတ် လုပ်တဲ့အခါ သုံးနိုင်ပါတယ်။

// CSS မှာ .navigation.active ဆိုပြီး style သတ်မှတ်ထားမယ်ဆိုရင်
// ဒီ code က အဲဒီ style ကို toggle လုပ်သလိုဖြစ်သွားပါတယ်။
