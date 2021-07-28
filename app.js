
// console.log("its working");
new fullpage("#fullPage",{
    autoScrolling : true,
    navigation : true,
    onLeave : function(origin, destination, direction){
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay : 0.5});
        tl.fromTo(title,0.5,{y: '50',opacity :0}, {y : 0, opacity : 1});

        if(destination.index == 1){
            const chair1 = document.querySelector('.chair1');
            const chair2 = document.querySelector('.chair2');
            const chair3 = document.querySelector('.chair3');
            const description = document.querySelector('.description');

            tl.fromTo(chair1,0.7,{x:'100%'}, {x : '-80%'})
            .fromTo(chair1,1,{opacity : 1},{opacity : 0})
            tl.fromTo(chair2,0.7,{x:'100%'}, {x : '-80%'})
            .fromTo(chair2,1,{opacity : 1},{opacity : 0})
            tl.fromTo(chair3,0.7,{x:'100%'}, {x : '-80%'})
            .fromTo(chair3,2,{opacity : 0},{opacity : 1})
            // .fromTo(chair3,2,{opacity : 1},{opacity : 1})
            
            .fromTo(description,0.5,{y: '50',opacity :0}, {y : 0, opacity : 1})
        }
    }
});