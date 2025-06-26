// Sample product data for Seafood
const products = [
    { id: 1, name: 'atlantic Croaker', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Atlantic Croaker.jpg' },
    { id: 2, name: 'Live Catfish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Live Catfish.jpg' },
    { id: 3, name: 'Live Abalone', category: 'mollusk', price: 8.99, description: 'Each', image: 'seafoodimages/Live Abalone.jpg' },
    { id: 4, name: 'Live Stone Crab', category: 'Crab', price: 6.99, description: 'Per lb', image: 'seafoodimages/Live Stone Crab.jpg' },
    { id: 5, name: 'Fresh Canada Crab', category: 'Crab', price: 14.99, description: 'Per lb', image: 'seafoodimages/Fresh Canada Crab.jpg' },
    { id: 6, name: 'Fresh Lobster', category: 'Lobster', price: 16.99, description: 'Per lb', image: 'seafoodimages/Fresh Lobster.jpg' },
    { id: 7, name: 'Golden Pompano', category: 'fish', price: 6.99, description: 'Per lb', image: 'seafoodimages/Golden Pompano.jpg' },
    { id: 8, name: 'Fresh Tilapia', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Fresh Tilapia.jpg' },
    { id: 9, name: 'Red Tilapia', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Red Tilapia.jpg' },
    { id: 10, name: 'Milk Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Milk Fish.jpg' },
    { id: 11, name: 'Red Drum', category: 'fish', price: 6.49, description: 'Per lb', image: 'seafoodimages/Red Drum.jpg' },
    { id: 12, name: 'Fresh Mackerel', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Fresh Mackerel.jpg' },
    { id: 13, name: 'Fresh Squid', category: 'Squid', price: 5.49, description: 'Per lb', image: 'seafoodimages/Fresh Squid.jpg' },
    { id: 14, name: 'Yellow Croaker', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Yellow Croaker.jpg' },
    { id: 15, name: 'Porgy Fish', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Porgy Fish.jpg' },
    { id: 16, name: 'Black Sea Bass', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Black Sea Bass.jpg' },
    { id: 17, name: 'Giant Perch', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Giant Perch.jpg' },
    { id: 18, name: 'Spanish Mackerel', category: 'fish', price: 6.99, description: 'Per lb', image: 'seafoodimages/Spanish Mackerel.jpg' },
    { id: 19, name: 'Skate Wing', category: 'fish', price: 4.49, description: 'Per lb', image: 'seafoodimages/Skate Wing.jpg' },
    { id: 20, name: 'Salmon Steak', category: 'fish', price: 10.49, description: 'Per lb', image: 'seafoodimages/Salmon Steak.jpg' },
    { id: 21, name: 'Salmon Head', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Salmon Head.jpg' },
    { id: 22, name: 'Whiting Fish', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Whiting Fish.jpg' },
    { id: 23, name: 'Catfish', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Catfish.jpg' },
    { id: 24, name: 'Bonita Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Bonita Fish.jpg' },
    { id: 25, name: 'Grass Carp', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Grass Carp.jpg' },
    { id: 26, name: 'Sea Bass Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Sea Bass Fish.jpg' },
    { id: 27, name: 'Shark', category: 'fish', price: 4.49, description: 'Per lb', image: 'seafoodimages/Shark.jpg' },
    { id: 28, name: 'Perch', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Perch.jpg' },
    { id: 29, name: 'Yellow Tail', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Yellow Tail.jpg' },
    { id: 30, name: 'Striped Bass', category: 'fish', price: 8.49, description: 'Per lb', image: 'seafoodimages/Striped Bass.jpg' },
    { id: 31, name: 'Jack Fish', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Jack Fish.jpg' },
{ id: 32, name: 'Fresh Groupers', category: 'fish', price: 12.99, description: 'Per lb', image: 'seafoodimages/Fresh Groupers.jpg' },
{ id: 33, name: 'Branzino', category: 'fish', price: 8.99, description: 'Per lb', image: 'seafoodimages/Branzino.jpg' },
{ id: 34, name: 'Red Snapper', category: 'fish', price: 11.99, description: 'Per lb', image: 'seafoodimages/Red Snapper.jpg' },
{ id: 35, name: 'Fresh Small Squid', category: 'Squid', price: 5.99, description: 'Per lb', image: 'seafoodimages/Fresh Small Squid.jpg' },
{ id: 36, name: 'Headless Shrimp', category: 'Shrimp', price: 7.99, description: 'Per lb', image: 'seafoodimages/Headless Shrimp.jpg' },
{ id: 37, name: 'Shrimp w/Head', category: 'Shrimp', price: 6.99, description: 'Per lb', image: 'seafoodimages/Shrimp with Head.jpg' },
{ id: 38, name: 'Fresh Surf Clam', category: 'mollusk', price: 2.99, description: 'Per lb', image: 'seafoodimages/Fresh Surf Clam.jpg' },
{ id: 39, name: 'Fresh Moon Snail', category: 'mollusk', price: 3.99, description: 'Per lb', image: 'seafoodimages/Fresh Moon Snail.jpg' },
{ id: 40, name: 'Fresh Pacific Geoduck', category: 'mollusk', price: 32.99, description: 'Per lb', image: 'seafoodimages/Fresh Pacific Geoduck.jpg' },
{ id: 41, name: 'Oyster', category: 'mollusk', price: 2.99, description: 'Per lb', image: 'seafoodimages/Oyster.jpg' },
{ id: 42, name: 'Sea Snails', category: 'mollusk', price: 5.99, description: 'Per lb', image: 'seafoodimages/Sea Snails.jpg' },
{ id: 43, name: 'Conch', category: 'mollusk', price: 5.99, description: 'Per lb', image: 'seafoodimages/Conch.jpg' },
{ id: 44, name: 'Large Clams', category: 'mollusk', price: 2.99, description: 'Per lb', image: 'seafoodimages/Large Clams.jpg' },
{ id: 45, name: 'BabyLonia Snail', category: 'mollusk', price: 5.99, description: 'Per lb', image: 'seafoodimages/BabyLonia Snail.jpg' },
{ id: 46, name: 'Blood Clam', category: 'mollusk', price: 7.99, description: 'Per lb', image: 'seafoodimages/Blood Clam.jpg' },
{ id: 47, name: 'Razor Clam', category: 'mollusk', price: 12.99, description: 'Per lb', image: 'seafoodimages/Razor Clam.jpg' },
{ id: 48, name: 'Blue Crab', category: 'Crab', price: 5.49, description: 'Per lb', image: 'seafoodimages/Blue Crab.jpg' },
{ id: 49, name: 'Canada Crab', category: 'Crab', price: 14.99, description: 'Per lb', image: 'seafoodimages/Canada Crab.jpg' },
{ id: 50, name: 'Fresh Butterfish', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Fresh Butterfish.jpg' },
{ id: 51, name: 'Fresh Spanish Mackerel', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Fresh Spanish Mackerel.jpg' },
{ id: 52, name: 'Fresh Bonita Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Fresh Bonita Fish.jpg' },
{ id: 53, name: 'Anchovy', category: 'fish', price: 8.99, description: 'Per lb', image: 'seafoodimages/Anchovy.jpg' },
{ id: 54, name: 'Dried Shrimp', category: 'Shrimp', price: 15.99, description: 'Per lb', image: 'seafoodimages/Dried Shrimp.jpg' },
{ id: 55, name: 'Salted Jellyfish Head', category: 'mollusk', price: 9.99, description: 'Per lb', image: 'seafoodimages/Salted Jellyfish Head.jpg' },
{ id: 56, name: 'Fish Bone', category: 'fish', price: 1.99, description: 'Per lb', image: 'seafoodimages/Fish Bone.jpg' },
{ id: 57, name: 'Golden Pompano (China)', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Golden Pompano (China).jpg' },
{ id: 58, name: 'Tilapia (China)', category: 'fish', price: 3.49, description: 'Per lb', image: 'seafoodimages/Tilapia (China).jpg' },
{ id: 59, name: 'Mackerel (Norway)', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Mackerel (Norway).jpg' },
{ id: 60, name: 'Fresh Squid (USA)', category: 'Squid', price: 4.99, description: 'Per lb', image: 'seafoodimages/Fresh Squid (USA).jpg' },
{ id: 61, name: 'Cuttlefish (USA/Wild Caught)', category: 'mollusk', price: 6.99, description: 'Per lb', image: 'seafoodimages/Cuttlefish(USA Wild Caught).jpg' },
{ id: 62, name: 'Greenland Turbot (USA/Wild Caught)', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Greenland Turbot (USA Wild Caught).jpg' },
{ id: 63, name: 'King Mackerel', category: 'fish', price: 0.0, description: 'Per lb', image: 'seafoodimages/King Mackerel.jpg' },
{ id: 64, name: 'Oceankist Masago Capelin Roe', category: 'fish', price: 12.5, description: 'Per unit', image: 'seafoodimages/Oceankist Masago Capelin Roe.jpg' },
{ id: 65, name: 'Breaded Imitation Crab Claws', category: 'Crab', price: 10.0, description: 'Per unit', image: 'seafoodimages/Breaded Imitation Crab Claws.jpg' },
{ id: 66, name: 'Shrimp Ball in Litchi Shape', category: 'Shrimp', price: 9.99, description: 'Per unit', image: 'seafoodimages/Shrimp Ball in Litchi Shape.jpg' },
{ id: 67, name: 'Panamei Salmon Portions', category: 'fish', price: 9.99, description: 'Per unit', image: 'seafoodimages/Panamei Salmon Portions.png' },
{ id: 68, name: 'Panamei Flounder', category: 'fish', price: 6.49, description: 'Per unit', image: 'seafoodimages/Panamei Flounder.png' },
{ id: 69, name: 'Panamei Whiting Merluza', category: 'fish', price: 8.49, description: 'Per unit', image: 'seafoodimages/Panamei Whiting Merluza.png' },
{ id: 70, name: 'Panamei Mahi Mahi', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Panamei Mahi Mahi.png' },
{ id: 71, name: 'Pacific Surf Tempura Shrimp', category: 'Shrimp', price: 0.0, description: 'Per unit', image: 'seafoodimages/Pacific Surf Tempura Shrimp.png' },
{ id: 72, name: 'Tobiko Seasoned Flying Fish Roe (wasabi)', category: 'fish', price: 0.0, description: 'Per unit', image: 'seafoodimages/Tobiko Seasoned Flying Fish Roe (wasabi).jpg' },
{ id: 73, name: 'Tobiko Seasoned Flying Fish Roe (orange)', category: 'fish', price: 0.0, description: 'Per unit', image: 'seafoodimages/Tobiko Seasoned Flying Fish Roe (orange).jpg' },
{ id: 74, name: 'Pacific Marina Brand Fresh Water Prawns', category: 'Shrimp', price: 36.0, description: 'Per unit', image: 'seafoodimages/Pacific Marina Brand Fresh Water Prawns.png' },
{ id: 75, name: 'Panamei Grouper Fillet', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Panamei Grouper Fillet.png' },
{ id: 76, name: 'Unistar Raw White Shrimp', category: 'Shrimp', price: 13.99, description: 'Per unit', image: 'seafoodimages/Unistar Raw White Shrimp.jpg' },
{ id: 77, name: 'Shrimpy Santa Priscila', category: 'Shrimp', price: 26.99, description: 'Per unit', image: 'seafoodimages/Shrimpy Santa Priscila.jpg' },
{ id: 78, name: 'Pacific Surf Raw Shrimp', category: 'Shrimp', price: 13.99, description: 'Per unit', image: 'seafoodimages/Pacific Surf Raw Shrimp.png' },
{ id: 79, name: 'Whole Cooked Melon Snail', category: 'mollusk', price: 4.99, description: 'Per unit', image: 'seafoodimages/Whole Cooked Melon Snail.jpg' },
{ id: 80, name: 'Frozen Coconut Top Snail', category: 'mollusk', price: 8.99, description: 'Per unit', image: 'seafoodimages/Frozen Coconut Top Snail.jpg' },
{ id: 81, name: 'Frozen Whole Apple Snail', category: 'mollusk', price: 10.0, description: 'Per unit', image: 'seafoodimages/Frozen Whole Apple Snail.jpg' },
{ id: 82, name: 'Frozen Cooked Abalone', category: 'mollusk', price: 8.99, description: 'Per unit', image: 'seafoodimages/Frozen Cooked Abalone.jpg' },
{ id: 83, name: 'Frozen Imitation Crab Stick 5”', category: 'Crab', price: 4.0, description: 'Per unit', image: 'seafoodimages/Frozen Imitation Crab Stick 5”.jpg' },
{ id: 84, name: 'Frozen Soft Shell Crab Cua Lot', category: 'Crab', price: 7.99, description: 'Per unit', image: 'seafoodimages/Frozen Soft Shell Crab Cua Lot.jpg' },
{ id: 85, name: 'Wild Caught Salted Crab', category: 'Crab', price: 6.0, description: 'Per unit', image: 'seafoodimages/Wild Caught Salted Crab.jpg' },
{ id: 86, name: 'Wild Caught Salted Crab Mixed', category: 'Crab', price: 6.0, description: 'Per unit', image: 'seafoodimages/Wild Caught Salted Crab Mixed.jpg' },
{ id: 87, name: 'Oceankist Frozen Soft Shell Crabs', category: 'Crab', price: 34.99, description: 'Per unit', image: 'seafoodimages/Oceankist Frozen Soft Shell Crabs.jpg' },
{ id: 88, name: 'Oceankist Frozen Soft Shell Blue Swimming Crab', category: 'Crab', price: 34.99, description: 'Per unit', image: 'seafoodimages/Oceankist Frozen Soft Shell Blue Swimming Crab.jpg' },
{ id: 89, name: 'Soft Shell Crab', category: 'Crab', price: 16.99, description: 'Per unit', image: 'seafoodimages/Soft Shell Crab.jpg' },
{ id: 90, name: 'Ocean Kist Cooked Razor Clam Meat', category: 'mollusk', price: 12.0, description: 'Per unit', image: 'seafoodimages/Ocean Kist Cooked Razor Clam Meat.jpg' },
{ id: 91, name: 'Ocean Kist Premium Quality Cooked Baby Clam Whole', category: 'mollusk', price: 6.0, description: 'Per unit', image: 'seafoodimages/Ocean Kist Premium Quality Cooked Baby Clam Whole.jpg' },
{ id: 92, name: 'Sunrise Wild Caught Cooked Ark Shell Clam', category: 'mollusk', price: 5.99, description: 'Per unit', image: 'seafoodimages/Sunrise Wild Caught Cooked Ark Shell Clam.jpg' },
{ id: 93, name: 'Oceankist Cooked Half Shell Blood', category: 'mollusk', price: 9.5, description: 'Per unit', image: 'seafoodimages/Oceankist Cooked Half Shell Blood.jpg' },
{ id: 94, name: 'Oceankist Baby Clam Meat', category: 'mollusk', price: 5.9, description: 'Per unit', image: 'seafoodimages/Oceankist Baby Clam Meat.jpg' },
{ id: 95, name: 'Oceankist Oyster Meat', category: 'mollusk', price: 6.0, description: 'Per unit', image: 'seafoodimages/Oceankist Oyster Meat.jpg' },
{ id: 96, name: 'Pacific Surf Frozen Cooked Periwinkle Meat', category: 'mollusk', price: 6.99, description: 'Per unit', image: 'seafoodimages/Pacific Surf Frozen Cooked Periwinkle Meat.jpg' },
{ id: 97, name: 'Oceankist Frozen Mussel Meat', category: 'mollusk', price: 6.0, description: 'Per unit', image: 'seafoodimages/Oceankist Frozen Mussel Meat.jpg' },
{ id: 98, name: 'White Cooked White Clams', category: 'mollusk', price: 8.99, description: 'Per unit', image: 'seafoodimages/White Cooked White Clams.jpg' },
{ id: 99, name: 'Frozen Whole Cooked Crawfish', category: 'fish', price: 25.99, description: 'Per unit', image: 'seafoodimages/Frozen Whole Cooked Crawfish.jpg' },
{ id: 100, name: 'Oceankist Cooked Whole Blue Mussels', category: 'mollusk', price: 4.99, description: 'Per unit', image: 'seafoodimages/Oceankist Cooked Whole Blue Mussels.jpg' },
{ id: 101, name: 'Frozen Cooked Razor Clam', category: 'mollusk', price: 12.99, description: 'Per unit', image: 'seafoodimages/Frozen Cooked Razor Clam.jpg' },
{ id: 102, name: 'Oceankist Clam Baby Meat', category: 'mollusk', price: 6.9, description: 'Per unit', image: 'seafoodimages/Oceankist Clam Baby Meat.jpg' },
{ id: 103, name: 'Frozen Indian Mackerel', category: 'fish', price: 8.0, description: 'Per unit', image: 'seafoodimages/Frozen Indian Mackerel.jpg' },
{ id: 104, name: 'Sunrise Frozen Round Scal', category: 'fish', price: 8.99, description: 'Per unit', image: 'seafoodimages/Sunrise Frozen Round Scal.jpg' },
{ id: 105, name: 'Frozen Mud Fish', category: 'fish', price: 19.99, description: 'Per unit', image: 'seafoodimages/Frozen Mud Fish.jpg' },
{ id: 106, name: 'Sunrise Yellow Tail Scad', category: 'fish', price: 8.99, description: 'Per unit', image: 'seafoodimages/Sunrise Yellow Tail Scad.jpg' },
{ id: 107, name: 'Sunrise Baby Round Scad', category: 'fish', price: 8.99, description: 'Per unit', image: 'seafoodimages/Sunrise Baby Round Scad.jpg' },
{ id: 108, name: 'Sunrise Frozen Baby Bonita', category: 'fish', price: 8.99, description: 'Per unit', image: 'seafoodimages/Sunrise Frozen Baby Bonita.jpg' },
{ id: 109, name: 'Frozen Yellow Stripe Trevally', category: 'fish', price: 3.99, description: 'Per unit', image: 'seafoodimages/Frozen Yellow Stripe Trevally.jpg' },
{ id: 110, name: 'Frozen Mullet Cabot', category: 'fish', price: 4.5, description: 'Per unit', image: 'seafoodimages/Frozen Mullet Cabot.jpg' },
{ id: 111, name: 'Sunrise Frozen Goby Fish', category: 'fish', price: 6.69, description: 'Per unit', image: 'seafoodimages/Sunrise Frozen Goby Fish.jpg' },
{ id: 112, name: 'Frozen Mullet Fish', category: 'fish', price: 9.99, description: 'Per unit', image: 'seafoodimages/Frozen Mullet Fish.jpg' },
{ id: 113, name: 'Oceankist Milkfish Belly', category: 'fish', price: 9.99, description: 'Per unit', image: 'seafoodimages/Oceankist Milkfish Belly.jpg' },
{ id: 114, name: 'Sunrise River Carp Fish', category: 'fish', price: 5.9, description: 'Per unit', image: 'seafoodimages/Sunrise River Carp Fish.jpg' },
{ id: 115, name: 'Sunrise Swai Fish Steak', category: 'fish', price: 12.0, description: 'Per unit', image: 'seafoodimages/Sunrise Swai Fish Steak.jpg' },
{ id: 116, name: 'Sunrise Swai Headless Whole Cut Steak', category: 'fish', price: 12.0, description: 'Per unit', image: 'seafoodimages/Sunrise Swai Headless Whole Cut Steak.jpg' },
{ id: 117, name: 'Sunrise Frozen Parrot Fish', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Sunrise Frozen Parrot Fish.jpg' },
{ id: 118, name: 'Sunrise Stripe Botia Fish', category: 'fish', price: 2.99, description: 'Per unit', image: 'seafoodimages/Sunrise Stripe Botia Fish.jpg' },
{ id: 119, name: 'Frozen Rabbit Fish', category: 'fish', price: 16.99, description: 'Per unit', image: 'seafoodimages/Frozen Rabbit Fish.jpg' },
{ id: 120, name: 'Sunrise Frozen Gutted Mackerel', category: 'fish', price: 3.99, description: 'Per unit', image: 'seafoodimages/Sunrise Frozen Gutted Mackerel.jpg' },
{ id: 121, name: 'Frozen King Weakfish', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Frozen King Weakfish.jpg' },
{ id: 122, name: 'Sunrise Frozen Gray Anchovy', category: 'fish', price: 4.99, description: 'Per unit', image: 'seafoodimages/Sunrise Frozen Gray Anchovy.jpg' },
{ id: 123, name: 'Frozen Pony Fish', category: 'fish', price: 4.99, description: 'Per unit', image: 'seafoodimages/Frozen Pony Fish.jpg' },
{ id: 124, name: 'Frozen Yellow Stripe Trevally Fish', category: 'fish', price: 5.00, description: 'Per unit', image: 'seafoodimages/Frozen Yellow Stripe Trevally Fish.jpg' },
{ id: 125, name: 'Frozen Tilapia Fillets', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Frozen Tilapia Fillets.jpg' },
{ id: 126, name: 'Frozen Tilapia Fillets', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Frozen Tilapia Fillets.jpg' },
{ id: 127, name: 'Frozen Eel Chuncks', category: 'fish', price: 13.00, description: 'Per unit', image: 'seafoodimages/Frozen Eel Chuncks.jpg' },
{ id: 128, name: 'Frozen Branzino Fillet', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Frozen Branzino Fillet.jpg' },
{ id: 129, name: 'Frozen Icefish', category: 'fish', price: 20.00, description: 'Per unit', image: 'seafoodimages/Frozen Icefish.jpg' },
{ id: 130, name: 'Frozen Big Eye Scad', category: 'fish', price: 10.00, description: 'Per unit', image: 'seafoodimages/Frozen Big Eye Scad.jpg' },
{ id: 131, name: 'Frozen Grey Mullet', category: 'fish', price: 5.99, description: 'Per unit', image: 'seafoodimages/Frozen Grey Mullet.jpg' },
{ id: 132, name: 'Frozen Marinated Tilapia', category: 'fish', price: 9.99, description: 'Per unit', image: 'seafoodimages/Frozen Marinated Tilapia.jpg' },
{ id: 133, name: 'Frozen Smelt Fish', category: 'fish', price: 9.00, description: 'Per unit', image: 'seafoodimages/Frozen Smelt Fish.jpg' },
{ id: 134, name: 'Frozen Moonfish', category: 'fish', price: 5.00, description: 'Per unit', image: 'seafoodimages/Frozen Moonfish.jpg' },
{ id: 135, name: 'Frozen Uncooked Sardines', category: 'fish', price: 15.00, description: 'Per unit', image: 'seafoodimages/Frozen Uncooked Sardines.jpg' },
{ id: 136, name: 'Frozen Shortfin Scad', category: 'fish', price: 10.00, description: 'Per unit', image: 'seafoodimages/Frozen Shortfin Scad.jpg' },
{ id: 137, name: 'Cake Smelt Round Medium Fish', category: 'fish', price: 2.99, description: 'Per lb', image: 'seafoodimages/Cake Smelt Round Medium Fish.jpg' },
{ id: 138, name: 'Frozen Gourmet Seafood Mix', category: 'fish', price: 4.50, description: 'Per unit', image: 'seafoodimages/Frozen Gourmet Seafood Mix.jpg' },
{ id: 139, name: 'Frozen Baby Cuttlefish', category: 'mollusk', price: 7.00, description: 'Per unit', image: 'seafoodimages/Frozen Baby Cuttlefish.jpg' },
{ id: 140, name: 'Frozen Baby Octopus', category: 'mollusk', price: 14.00, description: 'Per unit', image: 'seafoodimages/Frozen Baby Octopus.jpg' },
{ id: 141, name: 'Frozen Cooked Crawfish', category: 'fish', price: 9.99, description: 'Per unit', image: 'seafoodimages/Frozen Cooked Crawfish.jpg' },
{ id: 142, name: 'Frozen Snow Crab', category: 'Crab', price: 16.99, description: 'Per lb', image: 'seafoodimages/Frozen Snow Crab.jpg' },
{ id: 143, name: 'Angel Gate Frozen Squid', category: 'Squid', price: 19.99, description: 'Per unit', image: 'seafoodimages/Angel Gate Frozen Squid.jpg' },
{ id: 144, name: 'Frozen Calamari Tube', category: 'mollusk', price: 4.99, description: 'Per lb', image: 'seafoodimages/Frozen Calamari Tube.jpg' },
{ id: 145, name: 'Curled Calamari Chunks', category: 'mollusk', price: 8.99, description: 'Per unit', image: 'seafoodimages/Curled Calamari Chunks.jpg' },
{ id: 146, name: 'Frozen Cooked Squid', category: 'Squid', price: 5.99, description: 'Per unit', image: 'seafoodimages/Frozen Cooked Squid.jpg' },
{ id: 147, name: 'Oceankist Frozen Squid Tentacles', category: 'Squid', price: 12.0, description: 'Per unit', image: 'seafoodimages/Oceankist Frozen Squid Tentacles.jpg' },
{ id: 148, name: 'Frozen Squid Carved', category: 'Squid', price: 9.5, description: 'Per unit', image: 'seafoodimages/Frozen Squid Carved.jpg' },
{ id: 149, name: 'Frozen Squid Rings', category: 'Squid', price: 9.0, description: 'Per unit', image: 'seafoodimages/Frozen Squid Rings.jpg' },
{ id: 150, name: 'Frozen Fresh Water Prawns', category: 'Shrimp', price: 36.0, description: 'Per unit', image: 'seafoodimages/Frozen Fresh Water Prawns.jpg' },
{ id: 151, name: 'Frozen Cuttlefish', category: 'mollusk', price: 6.99, description: 'Per lb', image: 'seafoodimages/Frozen Cuttlefish.jpg' },
{ id: 152, name: 'Frozen Sea Squirt', category: 'mollusk', price: 13.99, description: 'Per unit', image: 'seafoodimages/Frozen Sea Squirt.jpg' },
{ id: 153, name: 'Frozen Headless Shrimp', category: 'Shrimp', price: 31.99, description: 'Per unit', image: 'seafoodimages/Frozen Headless Shrimp.jpg' },
{ id: 154, name: 'Frozen Shrimp', category: 'Shrimp', price: 39.99, description: 'Per unit', image: 'seafoodimages/Frozen Shrimp.jpg' },
{ id: 155, name: 'Frozen Head-On Shrimp 4 lbs', category: 'Shrimp', price: 27.99, description: 'Per unit', image: 'seafoodimages/Frozen Head-On Shrimp 4 lbs.jpg' },
{ id: 156, name: 'Frozen Head-On Shrimp 4 lbs', category: 'Shrimp', price: 27.99, description: 'Per unit', image: 'seafoodimages/Frozen Head-On Shrimp 4 lbs.jpg' },
{ id: 157, name: 'Frozen Head-On Shrimp', category: 'Shrimp', price: 28.99, description: 'Per unit', image: 'seafoodimages/Frozen Head-On Shrimp.jpg' },
{ id: 158, name: 'Frozen Peeled Deveined Shrimp', category: 'Shrimp', price: 14.99, description: 'Per unit', image: 'seafoodimages/Frozen Peeled Deveined Shrimp.jpg' },
{ id: 159, name: 'Lobster Tails', category: 'Lobster', price: 24.99, description: 'Per unit', image: 'seafoodimages/Lobster Tails.jpg' },
{ id: 160, name: 'Frozen Scallops Petoncle', category: 'mollusk', price: 9.0, description: 'Per unit', image: 'seafoodimages/Frozen Scallops Petoncle.jpg' },
{ id: 161, name: 'Frozen Sea Scallops', category: 'mollusk', price: 19.99, description: 'Per unit', image: 'seafoodimages/Frozen Sea Scallops.jpg' },
{ id: 162, name: 'Frozen Tuna Cubes', category: 'fish', price: 18.0, description: 'Per unit', image: 'seafoodimages/Frozen Tuna Cubes.jpg' },
{ id: 163, name: 'Sea Cucumber', category: 'fish', price: 15.99, description: 'Per unit', image: 'seafoodimages/Sea Cucumber.jpg' },
{ id: 164, name: 'Frozen Field Crab', category: 'Crab', price: 4.99, description: 'Per unit', image: 'seafoodimages/Frozen Field Crab.jpg' },
{ id: 165, name: 'Frozen Striped Pangasius Maws', category: 'fish', price: 11.99, description: 'Per unit', image: 'seafoodimages/Frozen Striped Pangasius Maws.jpg' },
{ id: 166, name: 'Frozen Cooked Spicy Short Neck', category: 'mollusk', price: 6.99, description: 'Per unit', image: 'seafoodimages/Frozen Cooked Spicy Short Neck.jpg' },
{ id: 167, name: 'Frozen Boiled Clam Meat', category: 'mollusk', price: 5.99, description: 'Per unit', image: 'seafoodimages/Frozen Boiled Clam Meat.jpg' },
{ id: 168, name: 'Frozen Clam White Cooked', category: 'mollusk', price: 3.99, description: 'Per unit', image: 'seafoodimages/Frozen Clam White Cooked.jpg' },
{ id: 169, name: 'Frozen Crawfish Meat', category: 'fish', price: 7.99, description: 'Per unit', image: 'seafoodimages/Frozen Crawfish Meat.jpg' },
{ id: 170, name: 'Frozen Coconut Top Snail', category: 'mollusk', price: 8.99, description: 'Per unit', image: 'seafoodimages/Frozen Coconut Top Snail.jpg' },
{ id: 171, name: 'Frozen Mussel Meat', category: 'mollusk', price: 6.0, description: 'Per unit', image: 'seafoodimages/Frozen Mussel Meat.jpg' },
{ id: 172, name: 'Frozen Baby Clam Meat', category: 'mollusk', price: 5.9, description: 'Per unit', image: 'seafoodimages/Frozen Baby Clam Meat.jpg' },
{ id: 173, name: 'Frozen Cooked Periwinkle Meat', category: 'mollusk', price: 6.99, description: 'Per unit', image: 'seafoodimages/Frozen Cooked Periwinkle Meat.jpg' },

];


// Function to display products with description and price
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            
        `;
        productList.appendChild(productDiv);
    });
}

// Initial display of all products
displayProducts(products);

// Price Label Update
function updatePriceLabel(value) {
    document.getElementById('price-label').textContent = `$${value}`;
}

// Filter Functionality
document.getElementById('price-range').addEventListener('input', function() {
    filterProducts();
});

document.getElementById('category-filter').addEventListener('change', function() {
    filterProducts();
});

// Filtering products by price and category
function filterProducts() {
    const priceLimit = parseFloat(document.getElementById('price-range').value);
    const selectedCategory = document.getElementById('category-filter').value;

    const filteredProducts = products.filter(product => {
        const priceMatch = product.price <= priceLimit;
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        return priceMatch && categoryMatch;
    });

    displayProducts(filteredProducts); // Display filtered products
}
