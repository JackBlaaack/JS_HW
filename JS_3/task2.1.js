//  Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb

let bytes = -5;
let counter = 0;
let unit;

if (!bytes || typeof bytes !== "number" || bytes < 0) {
   console.log(`Invalid value`)
} else {

while (bytes > 1024 && counter < 5) {
   bytes = bytes / 1024;
   counter++;
   } 
      
 switch (counter) {
   case 1:
      unit = "KB";
     break;
   case 2:
     unit = "MB";
     break;
   case 3:
     unit = "GB";
     break;
   case 4:
     unit = "TB";
     break;
     default:
      unit = ""
      break;
 }
 console.log(`${bytes} ${unit}`)
}

 