import products from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";


export default () => {

  return (
    <div className="bg-black text-white">
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-10 shadow-md">
      <div className=" max-w-screen-xl mx-auto flex justify-between items-center text-white">
        <div className="font-bold text-4xl">OuedKniss</div>
        <div className="space-x-6">
          <a href="#" className="text-xl font-bold hover:text-purple-400 transition">Home</a>
          <a href="#" className="text-xl font-bold hover:text-purple-400 transition">About Us</a>
          <a href="#" className="text-xl font-bold hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  
    {/* Main Section */}
    <main className=" max-w-screen-xl mx-auto py-12 pt-32 ">
      <div className="grid grid-cols-3 gap-8 ">
        {products.map((product) => (
          <div className="bg-white rounded-xl shadow-lg">
            <img src={product.image} alt={product.name} className="h-92 object-cover rounded-t-xl"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-lg text-purple-500">{product.price}</p>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <button className="w-full  bg-purple-500 text-black py-2 mt-5 rounded-md font-semibold hover:bg-purple-700 hover:scale-105 transition">Add to Cart</button>

            </div>
          </div>
        ))}
      </div>
    </main>
 
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-600  text-gray-300 py-12 text-center relative">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
    <div className="relative z-10">
      <h3 className="text-3xl text-white font-bold mb-4">Stay Connected</h3>
      <p className="text-lg mb-6">Sign up for the latest news and updates</p>
      <div className="flex flex-row justify-center gap-5">

        <a href="#facebook" className="text-white hover:text-purple-400 transition">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAn1JREFUSEvFll1oz1EYxz+LRsu83WxygaSIXLmQJuXCXNokFyhyRUSyxM3ukJfalEutlLU0K5m4cSNlYrUScuO1vCTZGmmLOF+dv87/OOd3zv/nYk/tYr//c57P85znOc/z1DFFUjdFXGoFTwPWAouBBdbpd8BrYAj4mRtILngZcBxoA+ZGjH8BrgGngBcpB1LgBuA0sB9QtDnyAzgHdAKTsQNF4EXATWBlDi2g8xDYAigV/0gMvAK4B8wvCa0cE3SdrYEqUyFwsy0URZySj8Bd4CXwHZgObAWWOwefWviYaywE7gO2p4jGuPT2AaOe7kFzUxe8bxeBA0VgefosA6ooVkeezyFT+V2eDRWZnuD7ync/4svArgywrnPA05Nh/bUDitqXMyYdx0LgeuATMDsDrJt57uj129wWHdXbXhoCbwTuZEClIufGra4cnsg899dh96p3Az2ZBhqBr1Z3luNE6rje9XUpueAOQHnIkbLgw0C3Dz4KnI1QXwFLcjwCrgLbIrpinPfBqmZVdUhqAT8GVkXs7AB6fbDG3f3IgaqKLIhcg+SbmVAzIjprgGEfrHan0aZi8UXd6U9urJx0Jo+q+oT9rtwfiUBlQ73/lw/W/znvUXpliusKsLPilN+5dBUaZykpA1ben8TA+n7LTKfNCXKtYN1kVaXHxqKGwLwCeC3gD4Dme9UUiy0CG8xSd9usPTMj8Fyw2qpa8SPfTtHq0wIMAnMC8BywBs4ms/6MhJxPLXsLbSfS+uJKCnzDrDt7zHj8HEtXClx5cuuBvabBtAJNkef01qbnEvAg9SxywL4N9ew3zvahbiVngtvk/0Sccr7U72UiLgXyD/0GGLB0H1VMfAgAAAAASUVORK5CYII="/>
        </a>
        <a href="#twitter" className="text-white hover:text-purple-400 transition">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAfpJREFUSEvt1kuoT1EUx/HPjYEkz0J5RUlKDDDxyiOSMhDJQJEyUEhRBmJgQCkJkamJt4wkE4WBxESGTChJmUh5F2fVvv/uPd1z9/73v/lP7q7dGey1f9+91l57rdOjS6OnS1zD4P8W+aEI9ThcxjLMwA+cw2l8S55MSd9PvZ7VwaNxBXvwp8D9aXiK2QPYfsB1LMBYLO9rUwdvrQzv4B62F8DvY1PmgG+wMUXjcZPHB3AhLT7Hzmq+bRBeghcFUXlXRXEqtuBBE3gVWqfCT5zARXyvQQ7ifAH4c3Lg4WChHoWvGFkTjCS5i2vVyV/hI47jZAH4THXoo3W7gbJ6X8rSwTS/IObMAvAxnMqBd2NhlVyLsLZAtMQkNK/mwBvQ7y5KlDM28b6f5cBxt5HFs4YAGBJxHRPwNweO9ZXpHU8aAvhN7BhIp6lkRkU6jL0Y08EBVteeZ0uqCbwf27C4A/BLLG06dBN4Pl5jRAfersOjdsFhvxk3EI2j3XEWRwbblGuLkxFhX4MVhfQnWI9fnYCjnUWSHUqtLceOCO3KQUOkr8cTU8WKZj4vzahe8Q5zI95rlMZLOcPe9XqoI5Ojrs4tFPiNWykqrb+Lkr1NdxyeRoOPP4vpmIPx1X1Hi4v5PhWZ26k6lbD62eSSq23B0g3D4NJIdWzXtVD/A1e4TB/sCCruAAAAAElFTkSuQmCC"/>
        </a>
        <a href="" className="text-white hover:text-purple-400 transition">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwhJREFUSEvllknoT1EUxz9/YxmKIvOQDFFmNmQIO0RSLMxiYWeIEjIkCrFRFmZZWBgybSgZisyJSCxkSiky7Qznq/P0uu597/1sKLd+vfrde8/3nu/5nqGOv7Tq/hIu/zxwO6A7UL+Eoa/AE+B1GZNFHrcFtgDjgZZlhoL9d8AZYHnqESlggR0x4KZu8DNwB5BHRasRMAho7Ic+AdOAs+GlGHAT4Ckgj/fZdxdwqwJoZrsBMAJY599XQA/z/ksePAasC2vc4+k1UqzjMw1Udg8CF4DR/oi1ZcAvgA7u8ZsagQUqQK25Hp67wEugYxGw6JUiH5nHvROgetQkYBjwHbgKHPd7s4ADfm+eh+oj0AxoDbzNbIZUSxiK5xWPT4i90IxsBZoHGx+AxcBeYI5Tfd8y4obrpRvQF9B/P1cILFFc8lSYEBhf6qAC2QHcBhoC/RxUXglce/l1z0HFkNiJAo8Dzjl1U3K3B/rrRdVgj1neeGd/iJgQaw9ym4pxf2dQTBYCHzVapuYur7d0Wg0sAbYnYr8C2AysMiY25s6IGT18JHA5BTwWOB/x+BQg6vVTRYotMaQHh4+WZsSC0upiClibyr3TJrKJOesnXMlS88kagSWwIaadMW47SnUGLOMCyZYKigrLMlP0tgTwSqdY3025MzddF6NcuIXAocedPLdV9gZExNXFi4XKZa+gMVQS13DPYcUxTKdFVgR2mtcq/EoZeaKmIMUqjVTjF1iF2h0wIoX3MW0M9TtRj6U+qTBVQGRYVMcKiBS/JxIGNRwVED1QOR0FVj19bnX2GdA1EUuVzMmW72JHbfKaFZFjib5bz7uS2qTCpT4QBdaE8d5ra/sqk0TicdnfUrNUrfC0yLfWWFtUjOZbDz1sY8yMEsNl21lbVF9X0/i1YsCtgMc+7mhy2ABctx79rQzF97NBQPcUDo1BPfOdSedSo89si/H+HNCfjj4yoVZ5KHx00bCn2iqlqoJJJLUssaNaoAxQt/ttVZmr2xQMBanHPAQKp5cqwLV4Wvns/wf8A/yioB/UQ80fAAAAAElFTkSuQmCC"/>
         
        </a>
        <a href="#linkedin" className="text-white hover:text-purple-400 transition">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAX1JREFUSEvt1rFLVlEYx/HPCw4hNBi0CA0pLo4F1lCSglNjmyAIDYUhOCQJEYmDhA42hPYHCG21uEiJUVuQtDVoTdaogg61iPfIDS4PqSDn5RX1bPd3zn2+5/ec5zz31jRo1BrEdeLAg7iMJazUIyv/c/wZtyqwAcznhkfwA7wOkO/orDf4eQEYD5AdXKw3+DY+Bcgb9NcbnOI/xBha8Q73kVxnHSfuOh3X3SV04BfWDwsSHV/Fz/DCLB6V2mNMh/kWdCMV5rXK3DYWkW7KRtxEDvAIXh7ibg1d2KyuyQH+gwtHnM1TTOYGp3i7+IHfZdqjodR2r+cGJ8epxX4tA9/BezRVQGljzfj7T8uR6lcYDqlewN2gpWpP570/coDv4W2AzCAVXXXcwJec4L4i1R8C5BkmgtaDjweB28oiqb4zh6FSGC3OaioE7MVy0J4Ulf7iHHye6moNnL3iSs3+ZrgG6du6WmpX0B7mvxXNYitoR647NX8gwfjBjw1zvAfOjXIfeRRb7AAAAABJRU5ErkJggg=="/>
        </a>
      </div>
      <p className="mt-6 text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
  </div>
  
 
  
  );
};
