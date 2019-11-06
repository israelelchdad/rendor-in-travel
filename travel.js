 let idd=0;
 let arr=[];

let arrtravels=[
    {code:1,name:'taiman',price:100},
    {code:2,name:'london',price:200},
    {code:3,name:'israel',price:-300},
    {code:4,name:'paris',price:400},
    {code:5,name:'prag',price:500},
    {code:6,name:'bodapest',price:600},
    {code:7,name:'oman',price:700},
    {code:8,name:'hungaria',price:800},
    {code:9,name:'germnaia',price:900},
    {code:10,name:'maroko',price:1000}

]
console.log(arrtravels)
let templatefortravel='<tr><td>#code$</td><td>#name$</td><td>#price$</td></tr>';
let tbod=document.querySelector('#b1');
arrtravels.forEach(travel=>
    tbod.innerHTML+=rendor(templatefortravel,travel))


function sent(){
    let namee=document.getElementById('name').value;
    let idname=document.getElementById('menid').value;

   let codtravel=document.getElementById('travid').value;
   let tr=arrtravels.find(travel=>{return travel.code==codtravel});
   // let tr=arrtravels.find(travel=>{return 6<7});
   let numpasangers=document.getElementById('passengers').value;
   let total=tr.price*numpasangers;
   orders(namee,idname,tr.name,numpasangers,total)
console.log(tr.name);
}
function orders(namee,idname,name3,numpasangers,total){
    idd++;
    let ord={id:idd,name:namee,meneid:idname,city:name3,pasangers:numpasangers,total2:total}
    arr.push(ord);
    console.log(arr);
    let t3='<tr><td>#id$</td><td>#name$</td><td>#meneid$</td><td>#city$</td><td>#pasangers$</td><td>#total2$</td>';
    let v2=document.getElementById('b2');
    v2.innerHTML+=rendor(t3,ord);
}
function serch(){
    let name5=document.getElementById("serch").value;
    let far=arr.filter(travels=>{return travels.name==name5});
    setarr(far);

    console.log(name5);
}
function setarr(far){
    let temp3='<tr><td>#id$</td><td>#name$</td><td>#pasangers$</td><td>#total2#</td>';
     let str3="";
     let v4=document.getElementById('b3');
    far.forEach(alement=>
     v4.innerHTML+=rendor(temp3,alement)
     )}
function totaltravel(){
    let sel=document.getElementById("select").value;
    console.log(sel)
    let far2=arr.filter(travels=>{return travels.city==sel});
    console.log(far2)
    let t=0;
    far2.forEach(trav=>{
        t+=trav.total2;

    })
    console.log(t)
    let ttt="הריוח שלך ליעד "+sel +'= '+t +'<br>'+'<hr></hr>'
    console.log(t)
    document.getElementById("totolostravels").innerHTML+=ttt;
}
function rendor (tamplate,data){
    console.log(tamplate)
     let  arr1=tamplate.split('#');
    for (let index = 1; index < arr1.length; index++) {
        const element = arr1[index];
        let arr2=element.split('$');
        arr1[index]=data[arr2[0]]+arr2[1];
      }
      let str=arr1.join('');
      return str;

}

 