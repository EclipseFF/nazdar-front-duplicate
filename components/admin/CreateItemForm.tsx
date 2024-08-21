'use client'

import {useEffect, useState} from "react";
import {apiUrl} from "@/lib/api";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Category} from "@/lib/models";
import GetAllCategories from "@/actions/categories/get-all-categories";

export default function CreateItemForm() {
    const router = useRouter()

    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>("")
    const [images, setImages] = useState<File[]>([])
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files)
            setImages(prevImages => [...prevImages, ...filesArray])
        }
    }

    const removeImage = (index: number) => {
        setImages(prevImages => prevImages.filter((_, i)=> i !== index))
    }

    const handleCreate = () => {
        let formData: FormData = new FormData
        formData.append("name", name)
        formData.append("price", price.toString())
        formData.append("description", description)
        formData.append("categories", JSON.stringify(selectedCategories))
        images.forEach((image) => {
            formData.append("images", image)
        })

        fetch(apiUrl + "/item", {
            method: "POST",
            body: formData
        }).then((res) => {
            if (res.ok) {
                router.push("/admin")
            }
        })
    }

    useEffect(() => {
        GetAllCategories().then((categories) => {
            setCategories(categories)
        })
    }, [])

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Создание нового продукта</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Введите название
                </label>
                <input
                    type="text"
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
                    onChange={e => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    rows={4}
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Выберите изображения
                </label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary_purple file:text-white hover:file:bg-bg_pink"
                />
            </div>

            {images.length > 0 && (
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
            )}

            <button
                onClick={() => handleCreate()}
                className="w-full bg-primary_purple text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
                Создать
            </button>
        </div>
    )
}