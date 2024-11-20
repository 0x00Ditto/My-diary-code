import Photo1 from "../assets/photo1.jpg";

export default function bento() {
  return (
    <div className="flex justify-center py-24">
      <div className="max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-6">
          <div className="col-span-4 m-2 rounded bg-slate-900 shadow-inner">
            <div className="flex justify-center">
              <img
                src="../assets/photo1.jpg"
                alt="Image"
                className="object-cover h-48 w-10/12 rounded-b"
              />
            </div>
            <div className="p-10 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <span>
                Beataeomnis illo libero earum iste laudantium quisquam dolores
                nam culpa commodi minus, magni, numquam amet eos atque deserunt
                blanditiis.
              </span>
              Deleniti, commodi.
            </div>
          </div>
          <div className="col-span-2 m-2">
            <img
              src="../assets/photo1.jpg"
              alt="Image"
              className="h-80 object-cover object-left transform transition duration-500 hover:scale-110 hover:translate-x-1 hover:translate-y-1"
            />
          </div>
          <div>
            <img
              src="../assets/photo1.jpg"
              alt="Image"
              className="h-80 object-cover object-left"
            />
          </div>
          <div>
            <img
              src="../assets/photo1.jpg"
              alt="Image"
              className="h-80 object-cover object-left"
            />
          </div>
          <div>
            <img
              src="../assets/photo1.jpg"
              alt="Image"
              className="h-80 object-cover object-left"
            />
          </div>
          <div>
            <div className="w-96 h-96 overflow-hidden relative group">
              <img
                src="../assets/photo1.jpg"
                alt="Zoomable"
                className="max-w-80 max-h-80 object-cover transform group-hover:scale-150 transition duration-500 z-0"
              />
              <div className="z-20">
                test
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
