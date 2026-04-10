import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Label, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { supabase } from "../lib/supabase";
export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }
        navigate("/dashboard");
    }
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-muted/40", children: _jsxs(Card, { className: "w-full max-w-md", children: [_jsxs(CardHeader, { className: "space-y-1", children: [_jsx(CardTitle, { className: "text-2xl font-bold", children: "\u7BA1\u7406\u540E\u53F0" }), _jsx(CardDescription, { children: "\u8BF7\u4F7F\u7528\u7BA1\u7406\u5458\u8D26\u53F7\u767B\u5F55" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "\u90AE\u7BB1" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: "\u5BC6\u7801" }), _jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), error && _jsx("p", { className: "text-sm text-destructive", children: error }), _jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "登录中..." : "登录" })] }) })] }) }));
}
//# sourceMappingURL=login.js.map