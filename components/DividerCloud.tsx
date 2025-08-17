import { Cloud } from "lucide-react";

export const DividerCloud = () => {
    return (
        <div className="flex items-center w-full my-8">
            {/* Cloud icon on the left */}
            <Cloud className="w-6 h-6 text-black/20 mr-2 flex-shrink-0" />
            {/* Divider line fills the rest */}
            <div className="flex-1 border-t border-black/10" />
        </div>
    );
}