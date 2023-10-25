function Card({ strMeal, strMealThumb, strInstructions }) {
  return (
    <>
      <div className="card  h-96 w-96 bg-primary text-primary-content shadow-xl">
        <figure>
          <img src={strMealThumb} alt={strMeal} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>
            {strInstructions.substring(0, 150)}...
            <button
              className="font-bold hover:underline"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              view more
            </button>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Test</div>
          </div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">{strMeal}</h3>
          <p className="py-4">{strInstructions}</p>
        </div>
      </dialog>
    </>
  );
}

export default Card;
