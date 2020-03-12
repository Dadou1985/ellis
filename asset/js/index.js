const canvas = d3.select("#test").append("svg")
                        .attr("width", "100%")
                        .attr("height", 1000)
                        .style("color", "white")
    
                function drawCircle(a, b, c, d, e, f, g, h, i, j, k, l) {
                    a.append("circle")
                        .attr("cx", b)
                        .attr("cy", c)
                        .attr("r", d)
                        .style("stroke-width", e)
                        .style("stroke", f)
                        .style("fill", g)
                        .on("mouseover", function(){
                            a.select("circle").style("fill", f)
                            a.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            a.selectAll("circle").style("fill", "none")
                            a.selectAll("text").style("fill", f)
                        })
                        
                    a.append("image")
                        .attr("xlink:href", l)
                        .attr("width", "15%")
                        .attr("height", "15%")
                        .attr("x", b - 100)
                        .attr("y", c - 200)
                        .on("mouseover", function(){
                            a.select("circle").style("fill", f)
                            a.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            a.selectAll("circle").style("fill", "none")
                            a.selectAll("text").style("fill", f)
                        })
    
                    a.append("text")
                        .attr("x", b)
                        .attr("y", c)
                        .text(h)
                        .attr("text-anchor", "middle")
                        .style("fill", f)
                        .style("font-size", "3em")
                        .on("mouseover", function(){
                            a.select("circle").style("fill", f)
                            a.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            a.selectAll("circle").style("fill", "none")
                            a.selectAll("text").style("fill", f)
                        })
                        
                    a.append("text")
                        .attr("x", b)
                        .attr("y", c * 1.2)
                        .text(i)
                        .attr("text-anchor", "middle")
                        .style("fill", f)
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            a.select("circle").style("fill", f)
                            a.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            a.selectAll("circle").style("fill", "none")
                            a.selectAll("text").style("fill", f)
                        })
                    
                    a.append("text")
                        .attr("x", b)
                        .attr("y", c * 1.4)
                        .text(j)
                        .attr("text-anchor", "middle")
                        .style("fill", f)
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            a.select("circle").style("fill", f)
                            a.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            a.selectAll("circle").style("fill", "none")
                            a.selectAll("text").style("fill", f)
                        })
    
                    a.append("text")
                        .attr("x", b)
                        .attr("y", c * 1.6)
                        .text(k)
                        .attr("text-anchor", "middle")
                        .style("fill", f)
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            a.select("circle").style("fill", f)
                            a.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            a.selectAll("circle").style("fill", "none")
                            a.selectAll("text").style("fill", f)
                        })

                }
    
                /*const fuelCar = drawCircle(canvas, "20%", "50%", "20%", 3, "blue", "none", "Renault Captur", "Essence", "210 000km", "Année 2013", "https://cdn.drivek.it/configurator-covermobile/cars/fr/500/RENAULT/CAPTUR/38975_SUV-5-DOORS/renault-captur-2019-mobile.jpg")
    
                const electricCar = drawCircle(canvas, "80%", "50%", "20%", 3, "green", "none", "Tesla Model S", "50 000€", "Autonomie de 505km", "", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ37m8X0Urzm4J30YgAKqwYWyfzZM99g76L-0XCRAoIH3oOh06n")
                */
    
                const fuelCar = drawCircle(canvas, "300", "300", "20%", 3, "blue", "none", "Renault Captur", "Essence", "210 000km", "Année 2013", "https://cdn.drivek.it/configurator-covermobile/cars/fr/500/RENAULT/CAPTUR/38975_SUV-5-DOORS/renault-captur-2019-mobile.jpg")
    
                const electricCar = drawCircle(canvas, "1050", "300", "20%", 3, "green", "none", "Tesla Model S", "50 000€", "Autonomie de 505km", "", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ37m8X0Urzm4J30YgAKqwYWyfzZM99g76L-0XCRAoIH3oOh06n")

                const interLine = canvas.append("line")
                        .attr("x1","40%")
                        .attr("y1","30%")
                        .attr("x2","60%")
                        .attr("y2","30%")
                        .style("fill", "none")
                        .style("stroke-width", 3)
                        .style("stroke", "yellow")

                
    
                /*function drawCircle(a, b, c, d, e, f, g) {
                    a.append("circle")
                        .attr("cx", b)
                        .attr("cy", c)
                        .attr("r", d)
                        .style("stroke-width", e)
                        .style("stroke", f)
                        .style("fill", g)
    
                }
    
                const fuelCar = drawCircle(canvas, "20%", "50%", "20%", 3, "blue", "none")
    
                const electricCar = drawCircle(canvas, "80%", "50%", "20%", 3, "green", "none")
    
                canvas.append("line")
                        .attr("x1","40%")
                        .attr("y1","50%")
                        .attr("x2","60%")
                        .attr("y2","50%")
                        .style("fill", "none")
                        .style("stroke-width", 4)
                        .style("stroke", "yellow")*/
    
            
    
                // set the dimensions and margins of the graph
                var width = 500
                height = 450
                margin = 40
            
                // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
                var radius = Math.min(width, height) / 2 - margin
            
                // append the svg object to the div called 'my_dataviz'
                var svg = canvas.append("svg")
                    .attr("x", 150)
                    .attr("y", 520)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 220)
                    .text("Compatibilité")
                    .attr("class", "badge badge-success")
                    .style("fill", "green")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 250)
                    .text("Temps Trajet Total")
                    .style("fill", "blue")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")

            
                // Create dummy data
                var data = {a: 78, b: 22}
            
                // set the color scale
                var color = d3.scaleOrdinal()
                    .domain(["a", "b"])
                    .range(["#008000","blue"]);
            
                // Compute the position of each group on the pie:
                var pie = d3.pie()
                    .sort(null) // Do not sort group by size
                    .value(function(d) {return d.value; })
                var data_ready = pie(d3.entries(data))
            
                // The arc generator
                var arc = d3.arc()
                    .innerRadius(radius * 0)         // This is the size of the donut hole
                    .outerRadius(radius * 0.8)
            
                // Another arc that won't be drawn. Just for labels positioning
                var outerArc = d3.arc()
                    .innerRadius(radius * 0.9)
                    .outerRadius(radius * 0.9)
            
                // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                svg
                    .selectAll('allSlices')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d){ return(color(d.data.key)) })
                    .attr("stroke", "blue")
                    .style("stroke-width", "2px")
                    .style("opacity", 0.7)
            
                // set the dimensions and margins of the graph
                var width = 500
                height = 450
                margin = 40
            
                // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
                var radius = Math.min(width, height) / 2 - margin
            
                // append the svg object to the div called 'my_dataviz'
                var svg = canvas.append("svg")
                    .attr("x", 700)
                    .attr("y", 520)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 220)
                    .text("Compatibilité")
                    .attr("class", "badge badge-success")
                    .style("fill", "green")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")
                    

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 250)
                    .text("Distance Trajet Total")
                    .style("fill", "blue")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")
            
                // Create dummy data
                var data = {a: 22, b: 78}
            
                // set the color scale
                var color = d3.scaleOrdinal()
                    .domain(["a", "b"])
                    .range(["blue","#008000"]);
            
                // Compute the position of each group on the pie:
                var pie = d3.pie()
                    .sort(null) // Do not sort group by size
                    .value(function(d) {return d.value; })
                var data_ready = pie(d3.entries(data))
            
                // The arc generator
                var arc = d3.arc()
                    .innerRadius(radius * 0)         // This is the size of the donut hole
                    .outerRadius(radius * 0.8)
            
                // Another arc that won't be drawn. Just for labels positioning
                var outerArc = d3.arc()
                    .innerRadius(radius * 0.9)
                    .outerRadius(radius * 0.9)
            
                // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                svg
                    .selectAll('allSlices')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d){ return(color(d.data.key)) })
                    .attr("stroke", "blue")
                    .style("stroke-width", "2px")
                    .style("opacity", 0.7)













                    const canvas = d3.select("#test").append("svg")
                        .attr("width", "40%")
                        .attr("height", 500)
                        .style("color", "white")

                const fuelCarCircle = canvas.append("circle")
                        .attr("cx", 270)
                        .attr("cy", 250)
                        .attr("r", "45%")
                        .style("stroke-width", 3)
                        .style("stroke", "blue")
                        .style("fill", "none")
                        .on("mouseover", function(){
                            canvas.select("circle").style("fill", "blue")
                            canvas.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas.selectAll("circle").style("fill", "none")
                            canvas.selectAll("text").style("fill", "blue")
                        })
                        
                   canvas.append("image")
                        .attr("xlink:href", "https://cdn.drivek.it/configurator-covermobile/cars/fr/500/RENAULT/CAPTUR/38975_SUV-5-DOORS/renault-captur-2019-mobile.jpg")
                        .attr("width", "40%")
                        .attr("height", "40%")
                        .attr("x", 170)
                        .attr("y", 50)
                        .on("mouseover", function(){
                            canvas.select("circle").style("fill", "blue")
                            canvas.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas.selectAll("circle").style("fill", "none")
                            canvas.selectAll("text").style("fill", "blue")
                        })
    
                    canvas.append("text")
                        .attr("x", 270)
                        .attr("y", 270)
                        .text("Renault Captur")
                        .attr("text-anchor", "middle")
                        .style("fill", "blue")
                        .style("font-size", "3em")
                        .attr("class", "badge badge-success")
                        .on("mouseover", function(){
                            canvas.select("circle").style("fill", "blue")
                            canvas.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas.selectAll("circle").style("fill", "none")
                            canvas.selectAll("text").style("fill", "blue")
                        })
                        
                    canvas.append("text")
                        .attr("x", 270)
                        .attr("y", 330)
                        .text("Essence")
                        .attr("text-anchor", "middle")
                        .style("fill", "blue")
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            canvas.select("circle").style("fill", "blue")
                            canvas.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas.selectAll("circle").style("fill", "none")
                            canvas.selectAll("text").style("fill", "blue")
                        })
                    
                    canvas.append("text")
                        .attr("x", 270)
                        .attr("y", 380)
                        .text("210 000km")
                        .attr("text-anchor", "middle")
                        .style("fill", "blue")
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            canvas.select("circle").style("fill", "blue")
                            canvas.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas.selectAll("circle").style("fill", "none")
                            canvas.selectAll("text").style("fill", "blue")
                        })
    
                    canvas.append("text")
                        .attr("x", 270)
                        .attr("y", 430)
                        .text("Année 2013")
                        .attr("text-anchor", "middle")
                        .style("fill", "blue")
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            canvas.select("circle").style("fill", "blue")
                            canvas.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas.selectAll("circle").style("fill", "none")
                            canvas.selectAll("text").style("fill", "blue")
                        })


                const canvas2 = d3.select("#test").append("svg")
                        .attr("width", "40%")
                        .attr("height", 500)
                        .style("color", "white")

                const electricCarCircle = canvas2.append("circle")
                        .attr("cx", 270)
                        .attr("cy", 250)
                        .attr("r", "45%")
                        .style("stroke-width", 3)
                        .style("stroke", "green")
                        .style("fill", "none")
                        .on("mouseover", function(){
                            canvas2.select("circle").style("fill", "green")
                            canvas2.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas2.selectAll("circle").style("fill", "none")
                            canvas2.selectAll("text").style("fill", "green")
                        })
                        
                   canvas2.append("image")
                        .attr("xlink:href", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ37m8X0Urzm4J30YgAKqwYWyfzZM99g76L-0XCRAoIH3oOh06n")
                        .attr("width", "40%")
                        .attr("height", "40%")
                        .attr("x", 170)
                        .attr("y", 50)
                        .on("mouseover", function(){
                            canvas2.select("circle").style("fill", "green")
                            canvas2.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas2.selectAll("circle").style("fill", "none")
                            canvas2.selectAll("text").style("fill", "green")
                        })
    
                    canvas2.append("text")
                        .attr("x", 270)
                        .attr("y", 270)
                        .text("Tesla Model S")
                        .attr("text-anchor", "middle")
                        .style("fill", "green")
                        .style("font-size", "3em")
                        .attr("class", "badge badge-success")
                        .on("mouseover", function(){
                            canvas2.select("circle").style("fill", "green")
                            canvas2.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas2.selectAll("circle").style("fill", "none")
                            canvas2.selectAll("text").style("fill", "green")
                        })
                        
                    canvas2.append("text")
                        .attr("x", 270)
                        .attr("y", 330)
                        .text("50 000€")
                        .attr("text-anchor", "middle")
                        .style("fill", "green")
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            canvas2.select("circle").style("fill", "green")
                            canvas2.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas2.selectAll("circle").style("fill", "none")
                            canvas2.selectAll("text").style("fill", "green")
                        })
                    
                    canvas2.append("text")
                        .attr("x", 270)
                        .attr("y", 380)
                        .text("Autonomie de 505km")
                        .attr("text-anchor", "middle")
                        .style("fill", "green")
                        .style("font-size", "2em")
                        .on("mouseover", function(){
                            canvas2.select("circle").style("fill", "green")
                            canvas2.selectAll("text").style("fill", "#181818")
                        })
                        .on("mouseleave", function(){
                            canvas2.selectAll("circle").style("fill", "none")
                            canvas2.selectAll("text").style("fill", "green")
                        })
    
            
            
            const canvas3 = d3.select("#test").append("svg")
                        .attr("width", "80%")
                        .attr("height", 500)
                        .style("color", "white")

                    // set the dimensions and margins of the graph
                var width = 500
                height = 450
                margin = 40
            
                // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
                var radius = Math.min(width, height) / 2 - margin
            
                // append the svg object to the div called 'my_dataviz'
                var svg = canvas3.append("svg")
                    .attr("x", "5%")
                    .attr("y", 0)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 220)
                    .text("Compatibilité")
                    .attr("class", "badge badge-success")
                    .style("fill", "green")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 250)
                    .text("Temps Trajet Total")
                    .style("fill", "blue")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")

            
                // Create dummy data
                var data = {a: 78, b: 22}
            
                // set the color scale
                var color = d3.scaleOrdinal()
                    .domain(["a", "b"])
                    .range(["#008000","blue"]);
            
                // Compute the position of each group on the pie:
                var pie = d3.pie()
                    .sort(null) // Do not sort group by size
                    .value(function(d) {return d.value; })
                var data_ready = pie(d3.entries(data))
            
                // The arc generator
                var arc = d3.arc()
                    .innerRadius(radius * 0)         // This is the size of the donut hole
                    .outerRadius(radius * 0.8)
            
                // Another arc that won't be drawn. Just for labels positioning
                var outerArc = d3.arc()
                    .innerRadius(radius * 0.9)
                    .outerRadius(radius * 0.9)
            
                // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                svg
                    .selectAll('allSlices')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d){ return(color(d.data.key)) })
                    .attr("stroke", "blue")
                    .style("stroke-width", "2px")
                    .style("opacity", 0.7)
            
                // set the dimensions and margins of the graph
                var width = 500
                height = 450
                margin = 40
            
                // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
                var radius = Math.min(width, height) / 2 - margin
            
                // append the svg object to the div called 'my_dataviz'
                var svg = canvas3.append("svg")
                    .attr("x", "50%")
                    .attr("y", 0)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 220)
                    .text("Compatibilité")
                    .attr("class", "badge badge-success")
                    .style("fill", "green")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")
                    

                    svg.append("text")
                    .attr("x", 0)
                    .attr("y", 250)
                    .text("Distance Trajet Total")
                    .style("fill", "blue")
                    .style("font-size", "2em")
                    .style("text-anchor", "middle")
            
                // Create dummy data
                var data = {a: 22, b: 78}
            
                // set the color scale
                var color = d3.scaleOrdinal()
                    .domain(["a", "b"])
                    .range(["blue","#008000"]);
            
                // Compute the position of each group on the pie:
                var pie = d3.pie()
                    .sort(null) // Do not sort group by size
                    .value(function(d) {return d.value; })
                var data_ready = pie(d3.entries(data))
            
                // The arc generator
                var arc = d3.arc()
                    .innerRadius(radius * 0)         // This is the size of the donut hole
                    .outerRadius(radius * 0.8)
            
                // Another arc that won't be drawn. Just for labels positioning
                var outerArc = d3.arc()
                    .innerRadius(radius * 0.9)
                    .outerRadius(radius * 0.9)
            
                // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                svg
                    .selectAll('allSlices')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d){ return(color(d.data.key)) })
                    .attr("stroke", "blue")
                    .style("stroke-width", "2px")
                    .style("opacity", 0.7)
    
                