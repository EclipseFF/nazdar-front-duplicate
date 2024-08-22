'use client'

import {useState, useEffect} from "react";
import {apiUrl} from "@/lib/api";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Category, Item} from "@/lib/models";
import GetItemById from "@/actions/items/get-item";
import GetAllCategories from "@/actions/categories/get-all-categories";

interface EditItemFormProps {
    id: number
}

export default function EditItemForm({id}: EditItemFormProps) {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [images, setImages] = useState<File[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [existingImages, setExistingImages] = useState<string[]>([]);

    useEffect(() => {
        GetAllCategories().then((data) => setCategories(data));

        GetItemById(id).then((data) => {
            setName(data.name);
            setPrice(data.price);
            data.description && setDescription(data.description);
            data.categories && setSelectedCategories(data.categories.map((category) => category.id.toString()));
            setExistingImages(data.images);
        })
    }, [id]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setImages(prevImages => [...prevImages, ...filesArray]);
        }
    };

    const removeImage = (index: number) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const removeExistingImage = (index: number) => {
        setExistingImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handleUpdate = () => {
        let formData: FormData = new FormData();
        formData.append("id", id.toString());
        formData.append("name", name);
        formData.append("price", price.toString());
        formData.append("description", description);
        formData.append("categories", JSON.stringify(selectedCategories));

        existingImages && existingImages.forEach((imageUrl) => {
            formData.append("oldImages", imageUrl);
        });

        images && images.forEach((image) => {
            formData.append("newImages", image);
        });

        fetch(apiUrl + "/item", {
            method: "PUT",
            body: formData
        }).then((res) => {
            if (res.ok) {
                router.push("/admin");
            }
        });
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Редактирование продукта</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Введите название
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Введите стоимость
                </label>
                <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(parseFloat(e.target.value))}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Выберите категории
                </label>
                <select
                    multiple
                    value={selectedCategories}
                    onChange={e => {
                        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                        setSelectedCategories(selectedOptions);
                    }}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Введите описание
                </label>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    rows={4}
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Добавить новые изображения
                </label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary_purple file:text-white hover:file:bg-bg_pink"
                />
            </div>

            {existingImages && existingImages.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-4">Существующие изображения</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {existingImages.map((image, index) => (
                            <div key={index} className="relative group">
                                <Image src={apiUrl + "/images/" + id + "/" + image} alt="preview" width={200} height={200} className="rounded-lg"/>
                                <button onClick={() => removeExistingImage(index)}
                                        className="absolute top-2 right-2 bg-red-600 text-white text-sm rounded-full p-1 opacity-75 hover:opacity-100 transition-opacity"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/*{images.length > 0 && (
                <div className="mb-6 grid grid-cols-2 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative group">
                            <Image src={URL.createObjectURL(image)} alt="preview" width={200} height={200}
                                   className="rounded-lg"/>
                            <button onClick={() => removeImage(index)}
                                    className="absolute top-2 right-2 bg-red-600 text-white text-sm rounded-full p-1 opacity-75 hover:opacity-100 transition-opacity"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            )}*/}

            <button
                onClick={handleUpdate}
                className="w-full bg-primary_purple text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
                Сохранить
            </button>
        </div>
    );
}