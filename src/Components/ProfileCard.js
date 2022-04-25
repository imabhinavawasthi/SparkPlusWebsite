function ProfileCard() {
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-4">
            <div class="card">
              <div class="card-body text-center">
                <div class="mt-3 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    class="rounded-circle img-fluid"
                    alt="profile"
                  />
                </div>
                <h4 class="mb-2">Abhinav Awasthi</h4>

                <button
                  type="button"
                  class="btn btn-primary btn-rounded btn-lg"
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
