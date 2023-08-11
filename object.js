const nayok ={
    name :'tahsan khan',
    id:212,
    address:'movie cinema',
    isSingle :true,
    friends:['apu', 'raz','salman','tahsin'],
    movies:[{name:'no 1', year:'2015'},{name:'king khan',year:2018}],
    act:function(){
        console.log('i like his song')
    },
    car:{
        brand:'tesla',
        price:5000000,
        made:2025,
        manufacturer:{
            name:'tesla',
            ceo:'elon mask',
            country:'USA'

        }
    }
}
console.log(nayok.act);
nayok.act();