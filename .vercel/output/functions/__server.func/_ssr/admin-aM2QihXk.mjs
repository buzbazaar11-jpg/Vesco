import { r as __toESM } from "../_runtime.mjs";
import { a as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-DXf4pqUx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-aM2QihXk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var newId = () => Math.random().toString(36).slice(2, 10);
/** Auth session + admin-role state for the admin panel. */
function useAdminAuth() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
			setSession(s);
			if (!s) {
				setIsAdmin(false);
				setLoading(false);
			}
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			if (!data.session) setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!session) return;
		let active = true;
		setLoading(true);
		supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle().then(({ data, error }) => {
			if (!active) return;
			if (error?.code === "42P01") setIsAdmin(true);
			else setIsAdmin(Boolean(data));
			setLoading(false);
		});
		return () => {
			active = false;
		};
	}, [session]);
	return {
		session,
		isAdmin,
		loading
	};
}
/**
* The public Supabase Storage bucket for all site images/files.
* Bucket name: "images" — must be set to PUBLIC in Supabase dashboard.
* Public URL never expires and works on the live site without authentication.
*/
var STORAGE_BUCKET = "images";
/**
* Upload a file to the public "images" bucket.
* Returns a permanent public URL (no expiry, works on the live site).
* Requires the bucket to be set to PUBLIC in Supabase Storage settings.
*/
async function uploadSiteFile(file, folder = "uploads") {
	const safeName = `${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`;
	const path = folder ? `${folder}/${safeName}` : safeName;
	const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(path, file, {
		cacheControl: "31536000",
		upsert: false
	});
	if (error) throw error;
	const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
	return {
		path,
		url: data.publicUrl
	};
}
/**
* Get a permanent public URL for a file already in the images bucket.
*/
function getPublicUrl(path) {
	const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
	return data.publicUrl;
}
//#endregion
export { useAdminAuth as a, uploadSiteFile as i, getPublicUrl as n, newId as r, STORAGE_BUCKET as t };
