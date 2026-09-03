//#region node_modules/.nitro/vite/services/ssr/assets/autoTranslate-9ZVLFbqc.js
/**
* Site-wide Korean auto-translation layer.
*
* The dictionaries in src/locales cover authored copy. This layer is the
* safety net: it walks rendered text nodes and swaps any remaining English
* term/phrase for its Korean equivalent, the way a translate widget would.
* Original text is cached so switching back to English restores it exactly.
*/
/** English -> Korean glossary. Longer phrases are applied first. */
var glossary = {
	"About Us": "회사 소개",
	About: "회사 소개",
	Home: "홈",
	Technology: "기술",
	Technologies: "기술",
	Products: "제품",
	Product: "제품",
	Facility: "생산 시설",
	Facilities: "생산 시설",
	Quality: "품질",
	Research: "연구",
	Insights: "인사이트",
	Resources: "자료실",
	Contact: "문의",
	"Contact Us": "문의하기",
	FAQ: "자주 묻는 질문",
	Menu: "메뉴",
	Close: "닫기",
	Open: "열기",
	Previous: "이전",
	Next: "다음",
	Search: "검색",
	Submit: "제출",
	Send: "보내기",
	Sending: "전송 중",
	Cancel: "취소",
	Loading: "불러오는 중",
	"Page not found": "페이지를 찾을 수 없습니다",
	"More pages": "더 많은 페이지",
	"Previous slide": "이전 슬라이드",
	"Next slide": "다음 슬라이드",
	"Toggle Sidebar": "사이드바 전환",
	Sidebar: "사이드바",
	"Vesco Science": "베스코 사이언스",
	Exosome: "엑소좀",
	Exosomes: "엑소좀",
	Lyophilization: "동결건조",
	Formulation: "제형 개발",
	Manufacturing: "제조",
	"Clean Room": "클린룸",
	Cleanroom: "클린룸",
	"Quality Control": "품질관리",
	"Quality Management": "품질경영",
	"Cold Chain": "콜드체인",
	"Regenerative Medicine": "재생의학",
	Biotechnology: "바이오테크놀로지",
	Laboratory: "실험실",
	"Certificate of Analysis": "시험성적서",
	Documentation: "기술 문서",
	Specifications: "제품 규격",
	Specification: "규격",
	Overview: "개요",
	Capabilities: "역량",
	Partnership: "파트너십",
	Inquiry: "문의",
	"Request Access": "열람 요청",
	"Request a Quote": "견적 요청",
	"Learn more": "자세히 보기",
	"Read more": "더 보기",
	"View all": "전체 보기",
	"Get in touch": "문의하기",
	Email: "이메일",
	Phone: "전화",
	Address: "주소",
	Company: "회사명",
	Name: "이름",
	Message: "문의 내용",
	Required: "필수",
	Optional: "선택"
};
var ORIGINAL = /* @__PURE__ */ new WeakMap();
var SKIP_TAGS = /* @__PURE__ */ new Set([
	"SCRIPT",
	"STYLE",
	"NOSCRIPT",
	"TEXTAREA",
	"INPUT",
	"CODE",
	"PRE"
]);
var entries = Object.entries(glossary).sort((a, b) => b[0].length - a[0].length);
function escapeRe(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var pattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${entries.map(([en]) => escapeRe(en)).join("|")})(?=$|[^\\p{L}\\p{N}])`, "giu");
var lookup = new Map(entries.map(([en, ko]) => [en.toLowerCase(), ko]));
function translateText(input) {
	return input.replace(pattern, (match, lead, term) => {
		const ko = lookup.get(term.toLowerCase());
		return ko ? `${lead}${ko}` : match;
	});
}
function hasHangul(s) {
	return /[\uAC00-\uD7A3]/.test(s);
}
function walk(root, apply) {
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode(node) {
		const parent = node.parentElement;
		if (!parent || SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
		if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
		if (!(node.nodeValue ?? "").trim()) return NodeFilter.FILTER_REJECT;
		return NodeFilter.FILTER_ACCEPT;
	} });
	const nodes = [];
	let current = walker.nextNode();
	while (current) {
		nodes.push(current);
		current = walker.nextNode();
	}
	nodes.forEach(apply);
}
function translateNode(node) {
	const current = node.nodeValue ?? "";
	if (hasHangul(current) && !/[A-Za-z]{3,}/.test(current)) return;
	const source = ORIGINAL.get(node) ?? current;
	const next = translateText(source);
	if (next !== current) {
		ORIGINAL.set(node, source);
		node.nodeValue = next;
	}
}
function restoreNode(node) {
	const original = ORIGINAL.get(node);
	if (original != null && node.nodeValue !== original) node.nodeValue = original;
}
/**
* Starts the Korean auto-translation observer. Returns a cleanup function
* that disconnects the observer and restores the original English text.
*/
function startAutoTranslate() {
	if (typeof document === "undefined") return () => {};
	const root = document.body;
	const run = () => walk(root, translateNode);
	run();
	const observer = new MutationObserver((mutations) => {
		for (const m of mutations) {
			if (m.type === "characterData" && m.target.nodeType === Node.TEXT_NODE) translateNode(m.target);
			m.addedNodes.forEach((n) => {
				if (n.nodeType === Node.TEXT_NODE) translateNode(n);
				else if (n.nodeType === Node.ELEMENT_NODE) walk(n, translateNode);
			});
		}
	});
	observer.observe(root, {
		childList: true,
		subtree: true,
		characterData: true
	});
	return () => {
		observer.disconnect();
		walk(root, restoreNode);
	};
}
//#endregion
export { startAutoTranslate };
