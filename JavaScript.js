// const przyciskBurger = document.body.querySelector('.burger');
// const activeElement = document.body.querySelectorAll('.show')

// 	przyciskBurger.addEventListener('click',function(){
// 		for (var i = 0; i <= activeElement.length ; i++){
// 			activeElement.classList.toggle("active");
// 			console.log('div.active');
//  		}});
 

// $('body').on('click',function (){
// 	$('.burger, .wraper, aside').toggleClass('active');
// 	console.log('działa!');
// })


const przyciskBurger = document.body.querySelector('.burger')
const trescStrony = document.body.querySelector('.wraper')
const kolumnaBoczna = document.body.querySelector('aside')
const iconStrzała = document.body.querySelector('span.iconSt')
const iconClose = document.body.querySelector('span.iconX')


	przyciskBurger.addEventListener('click', function(){
		// przyciskBurger.classList.toggle('active');
		trescStrony.classList.toggle('active');
		kolumnaBoczna.classList.toggle('active');
		iconStrzała.classList.toggle('show');
		iconClose.classList.toggle('show');
		tytleP.classList.toggle('active');
		console.log('działa!');
	})

	const tytleP = document.createElement('h1');
	tytleP.innerText = "Teks tworzony przez programowanie w czystym JavaScript";
	document.body.appendChild(tytleP);
	tytleP.classList.add('text');


	