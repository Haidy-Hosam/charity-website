import { X } from 'lucide-react'; 
const PurchaseModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    // 1. الخلفية الشفافة (Overlay)
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans" dir="rtl">
      
      {/* 2. الصندوق الأبيض نفسه */}
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative animate-fadeIn">
        
        {/* زرار (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          
          <div className="flex gap-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2 border border-gray-100 shrink-0">
              <img src={product.image} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-gray-900 mb-1">{product.title}</h3>
              <p className="text-[10px] text-gray-400 mb-2 line-clamp-2">
                نص تجريبي .. نص تجريبي .. نص تجريبي وصف مختصر للمنتج يظهر هنا
              </p>
              
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1 text-gray-500">
                    <span className="font-bold">اللون:</span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block ring-1 ring-gray-200"></span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <span className="font-bold">الكمية:</span>
                    <span>1</span>
                </div>
              </div>
            </div>
          </div>

          {/* فورم البيانات */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 text-right">الاسم</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#72B7C4] focus:ring-2 focus:ring-[#72B7C4]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 text-right">رقم الهاتف</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#72B7C4] focus:ring-2 focus:ring-[#72B7C4]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1 text-right">العنوان</label>
              <textarea 
                rows="3"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#72B7C4] focus:ring-2 focus:ring-[#72B7C4]/20 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="button" 
              className="w-full bg-[#72B7C4] hover:bg-[#5faab8] text-white font-bold py-3 rounded-xl text-lg transition-colors mt-4"
            >
              اشتري الآن
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;