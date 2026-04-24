import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhotograph,
  HiOutlineCalendar,
  HiOutlinePencilAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName ?? "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL ?? "");
  const [saving, setSaving] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    updateUserProfile({ displayName: name, photoURL: photoUrl })
      .then(() => {
        Swal.fire({
          title: "Profile updated!",
          text: "Your changes have been saved.",
          icon: "success",
          confirmButtonColor: "#331D2C",
        });
        setImgError(false);
      })
      .catch((err) => {
        Swal.fire({ title: "Error", text: err.message, icon: "error", confirmButtonColor: "#331D2C" });
      })
      .finally(() => setSaving(false));
  };

  const memberSince = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const initials = (user?.displayName ?? user?.email ?? "?")
    .charAt(0)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>iApplyNow | My Profile</title>
      </Helmet>

      {/* Hero banner */}
      <div
        className="h-40"
        style={{ background: "linear-gradient(135deg, #331D2C 0%, #5c3352 60%, #7a4a6e 100%)" }}
      />

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Avatar row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-14 mb-8">
          <div className="flex items-end gap-4">
            {user?.photoURL && !imgError ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                onError={() => setImgError(true)}
                className="w-28 h-28 rounded-2xl object-cover ring-4 ring-white shadow-lg"
              />
            ) : (
              <div className="w-28 h-28 rounded-2xl bg-amber-400 ring-4 ring-white shadow-lg flex items-center justify-center text-4xl font-extrabold text-amber-900">
                {initials}
              </div>
            )}
            <div className="pb-2">
              <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">
                {user?.displayName || "No name set"}
              </h1>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
          {memberSince && (
            <div className="flex items-center gap-1.5 text-xs text-gray-400 pb-2">
              <HiOutlineCalendar className="text-sm" />
              Member since {memberSince}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left: info card */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Account Info
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <HiOutlineUser className="text-[#331D2C] text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400">Display Name</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {user?.displayName || <span className="text-gray-400 italic">Not set</span>}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineMail className="text-[#331D2C] text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-semibold text-gray-800 break-all">{user?.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HiOutlineShieldCheck className="text-[#331D2C] text-lg mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400">Email Verified</p>
                    <span
                      className={`inline-block mt-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
                        user?.emailVerified
                          ? "bg-green-100 text-green-700"
                          : "bg-rose-100 text-rose-600"
                      }`}
                    >
                      {user?.emailVerified ? "Verified" : "Not verified"}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: edit form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-gray-800 mb-1 flex items-center gap-2">
                <HiOutlinePencilAlt className="text-[#331D2C]" />
                Edit Profile
              </h2>
              <p className="text-xs text-gray-400 mb-6">
                Update your display name and profile photo.
              </p>

              <form onSubmit={handleSave} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Display Name
                  </label>
                  <div className="relative">
                    <HiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#331D2C]/30 focus:border-[#331D2C] transition"
                    />
                  </div>
                </div>

                {/* Photo URL */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Photo URL
                  </label>
                  <div className="relative">
                    <HiOutlinePhotograph className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                    <input
                      type="url"
                      value={photoUrl}
                      onChange={(e) => { setPhotoUrl(e.target.value); setImgError(false); }}
                      placeholder="https://example.com/photo.jpg"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#331D2C]/30 focus:border-[#331D2C] transition"
                    />
                  </div>
                  {photoUrl && !imgError && (
                    <div className="mt-3 flex items-center gap-3">
                      <img
                        src={photoUrl}
                        alt="preview"
                        onError={() => setImgError(true)}
                        className="w-12 h-12 rounded-xl object-cover border border-gray-200"
                      />
                      <span className="text-xs text-gray-400">Preview</span>
                    </div>
                  )}
                </div>

                {/* Email (read-only) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email address
                    <span className="ml-2 text-xs font-normal text-gray-400">(cannot be changed)</span>
                  </label>
                  <div className="relative">
                    <HiOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-lg pointer-events-none" />
                    <input
                      type="email"
                      value={user?.email ?? ""}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-100 text-gray-400 text-sm cursor-not-allowed"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full py-3 rounded-xl bg-[#331D2C] text-white font-semibold text-sm hover:bg-[#4a2940] active:scale-95 transition-all duration-200 disabled:opacity-60"
                >
                  {saving ? "Saving…" : "Save Changes"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
