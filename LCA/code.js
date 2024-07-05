function myFunction() 
{
// LCA CALCULATOR

// Vegetarian Food

// Resource
const veg = {'cheese': 20, 'chocolate': 19, 'coffee': 17, 'palmoil': 8, 'oliveoil': 6, 'rice': 5, 'milk': 8, 'canesugar': 3, 'groundnut': 2.5, 'wheat': 1.4, 'tomatoes': 1.4, 'corn': 1, 'cassava': 1, 'soymilk': 0.9, 'peas': 0.9, 'apples': 0.4, 'citrusfruits': 0.3, 'nuts': 0.3 };
const vegList = Object.keys(veg);

// Processing
const vProcessing = 360.3932;

// Packaging
const vPackaging = 1591.246;

// Energy
const vEnergy = 14986.11;

// Distribution
const vDistribution = 7236.799;

// End of Life
const vEndOfLife = 1223.34;

// ... (similar definitions for other categories)
// Non-Vegetarian Food
const nveg = {'beef': 60,'lamb': 24,'prawns': 12,'pig': 7,'poulltry': 6,'fish': 5,'egg': 4.5};
const nveg_list = Object.keys(nveg);
  
const nv_processing = 360.3932;
const nv_packaging = 1591.246;
const nv_energy = 14986.11;
const nv_distribution = 7236.799;
const nv_endoflife = 1223.34;
  
// Transport
const trans = {'domesticflight': 25.5,'petrolcar': 19.2,'dieselcar': 17.1,'shorthaulflight': 15.6,'longhaulflight': 15,'bus': 10.5,'motorcycle': 10.3,'electricvehicle': 5.3,'nationalrail': 4.1,'ferry': 1.9,'eurostar': 6};
const trans_list = Object.keys(trans);
  
const t_processing = 23433.35;
const t_packaging = 1591.246;
const t_energy = 37680.5;
const t_distribution = 678.23;
const t_endoflife = 8792.042;
  
// Energy
const en = {'coal': 71.43,'coke': 97.14,'crudeoil': 142.86,'gasoline': 147.17,'kerosene': 147.17,'dieseloil': 145.71,'fueloil': 142.86,'naturalgas': 127.21};
const en_list = Object.keys(en);
  
const e_processing = 1600.382;
const e_packaging = 8838.234;
const e_energy = 14986.11;
const e_distribution = 7892.33;
const e_endoflife = 10987.23;
  
// Furniture
const furn = {'sofa': 88,'chair': 23,'table': 48,'diningtable': 92,'studytable': 22,'door': 34,'window': 78};
const furn_list = Object.keys(furn);
  
const f_processing = 360.3932;
const f_packaging = 3984.234;
const f_energy = 14986.11;
const f_distribution = 5834.289;
const f_endoflife = 5082.138;
  
// Construction materials
const const_mat = {'concrete': 1.59,'bricks': 2.4,'marble': 1.16,'stainlesssteel': 61.5,'timber': 7.2,'hardwood': 8.6,'glasswool': 13.5,'claytile': 4.5,'aluminium': 82.4,'mdf': 7.2,'plywood': 10.7,'glass': 8.5,'terrazzotile': 1.2,'ceramictile': 7.2,'wallpaper': 19.3,'iron': 19.1,'led': 15.7,'copper': 26,'pvcpipe': 244};
const const_mat_list = Object.keys(const_mat);
  
const c_processing = 802.34;
const c_packaging = 5959.787;
const c_energy = 14986.11;
const c_distribution = 1342.34;
const c_endoflife = 6778.48;
  
// Fabric
const fab = {'cotton': 6.55,'polyester': 8,'nylon': 7,'rayon': 6.23,'jute': 4.2,'leather': 8.2,'velvet': 7.98,'silk': 5.7,'denim': 7.67,'linen': 5.4,'jean': 6.54};
const fab_list = Object.keys(fab);
  
const fb_processing = 729.2823;
const fb_packaging = 6752.12;
const fb_energy = 14986.11;
const fb_distribution = 839.98;
const fb_endoflife = 2345.8;
  
// Plastic
const pla = {'bags': 14.1,'bottles': 11.9,'foodcontainers': 9.4,'wrappers': 9.1,'syntheticrope': 7.9,'fishingitems': 7.6,'plasticlids': 6.1,'glassbottle': 3.4,'cans': 3.2,'indsutrialpackaging': 1.4};
const pla_list = Object.keys(pla);
  
const p_processing = 983.234;
const p_packaging = 7543.28;
const p_energy = 14986.11;
const p_distribution = 1204.99;
const p_endoflife = 7629.658;
  

// User Input
var item = document.getElementById("item").value;
var unit = document.getElementById("units").value;
var units= parseInt(unit);

if (vegList.includes(item)) {
        var resourceOutput = "Resource: " + veg[item] + " kg";
        var processingOutput = "Processing: " + vProcessing + " kg";
        var packagingOutput = "Packaging: " + vPackaging + " kg";
        var energyOutput = "Energy: " + vEnergy + " kg";
        var distributionOutput = "Distribution: " + vDistribution + " kg";
        var endOfLifeOutput = "End of life: " + vEndOfLife + " kg";
        var total = veg[item] + vProcessing + vPackaging + vDistribution + vEndOfLife + vEnergy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
}

else if (nveg_list.includes(item))
{
        var resourceOutput = "Resource: " + nveg[item] + " kg";
        var processingOutput = "Processing: " + nv_processing + " kg";
        var packagingOutput = "Packaging: " + nv_packaging + " kg";
        var energyOutput = "Energy: " + nv_energy + " kg";
        var distributionOutput = "Distribution: " + nv_distribution + " kg";
        var endOfLifeOutput = "End of life: " + nv_endoflife + " kg";
        var total = nveg[item] + nv_processing + nv_packaging + nv_distribution + nv_endoflife + nv_energy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
    }

else if (trans_list.includes(item))
{       
        var resourceOutput = "Resource: " + trans[item] + " kg";
        var processingOutput = "Processing: " + t_processing + " kg";
        var packagingOutput = "Packaging: " + t_packaging + " kg";
        var energyOutput = "Energy: " + t_energy + " kg";
        var distributionOutput = "Distribution: " + t_distribution + " kg";
        var endOfLifeOutput = "End of life: " + t_endoflife + " kg";
        var total = trans[item] + t_processing + t_packaging + t_distribution + t_endoflife + vEnergy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
    
}

else if (furn_list.includes(item))
{
        var resourceOutput = "Resource: " + furn[item] + " kg";
        var processingOutput = "Processing: " + f_processing + " kg";
        var packagingOutput = "Packaging: " + f_packaging + " kg";
        var energyOutput = "Energy: " + f_energy + " kg";
        var distributionOutput = "Distribution: " + f_distribution + " kg";
        var endOfLifeOutput = "End of life: " + f_endoflife + " kg";
        var total = furn[item] + f_processing + f_packaging + f_distribution + f_endoflife + f_energy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
}

else if (fab_list.includes(item))
{
        var resourceOutput = "Resource: " + fab[item] + " kg";
        var processingOutput = "Processing: " + fb_processing + " kg";
        var packagingOutput = "Packaging: " + fb_packaging + " kg";
        var energyOutput = "Energy: " + vEnergy + " kg";
        var distributionOutput = "Distribution: " + vDistribution + " kg";
        var endOfLifeOutput = "End of life: " + vEndOfLife + " kg";
        var total = fab[item] + fb_processing + fb_packaging + fb_distribution + fb_endoflife + fb_energy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
}

else if (en_list.includes(item))
{
        var resourceOutput = "Resource: " + en[item] + " kg";
        var processingOutput = "Processing: " + e_processing + " kg";
        var packagingOutput = "Packaging: " + e_packaging + " kg";
        var energyOutput = "Energy: " + e_energy + " kg";
        var distributionOutput = "Distribution: " + e_distribution + " kg";
        var endOfLifeOutput = "End of life: " + e_endoflife + " kg";
        var total = en[item] + e_processing + e_packaging + e_distribution + e_endoflife + e_energy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
}

else if (pla_list.includes(item))
{
        var resourceOutput = "Resource: " + pla[item] + " kg";
        var processingOutput = "Processing: " + p_processing + " kg";
        var packagingOutput = "Packaging: " + p_packaging + " kg";
        var energyOutput = "Energy: " + p_energy + " kg";
        var distributionOutput = "Distribution: " + p_distribution + " kg";
        var endOfLifeOutput = "End of life: " + p_endoflife + " kg";
        var total = pla[item] + p_processing + p_packaging + p_distribution + p_endoflife + p_energy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
}

else
{
        var resourceOutput = "Resource: " + veg["tomatoes"] + " kg";
        var processingOutput = "Processing: " + vProcessing + " kg";
        var packagingOutput = "Packaging: " + vPackaging + " kg";
        var energyOutput = "Energy: " + vEnergy + " kg";
        var distributionOutput = "Distribution: " + vDistribution + " kg";
        var endOfLifeOutput = "End of life: " + vEndOfLife + " kg";
        var total = veg[item] + vProcessing + vPackaging + vDistribution + vEndOfLife + vEnergy;
        var unitOutput = "Total per unit: " + total + " kg";
        var totalUnitOutput = "Total for " + units + ": " + total * units + " kg";

        // Display results on the webpage
        document.getElementById("resource").textContent = resourceOutput;
        document.getElementById("processing").textContent = processingOutput;
        document.getElementById("packaging").textContent = packagingOutput;
        document.getElementById("energy").textContent = energyOutput;
        document.getElementById("distribution").textContent = distributionOutput;
        document.getElementById("endoflife").textContent = endOfLifeOutput;
        document.getElementById("unit").textContent = unitOutput;
        document.getElementById("totalunit").textContent = totalUnitOutput;
}

// ... (similar conditions for other categories)
}