import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AiOutlineLoading } from "react-icons/ai"
import { TbFileSearch } from "react-icons/tb"
import {
  SearchFormContainer,
  SearchFormContent,
  SearchFormInfo,
  EmptyQueryContainer
} from "./styles"
import { GithubContext } from "../../../../contexts/githubContext"

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { posts, loading, fetchSearchPost, fetchRepos } = useContext(GithubContext)
  const debounceRef = useRef<number | null>(null)

  const { register, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const query = watch("query")

  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (!query || query.trim() === "") {
      setIsTyping(false)
      fetchRepos()
      return
    }

    setIsTyping(true)

    debounceRef.current = window.setTimeout(async () => {
      await fetchSearchPost(query)
      setIsTyping(false) 
    }, 1500)

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [query])

  const isLoading = isTyping || (loading.isLoading && loading.resource === "filterPosts")

  return (
    <SearchFormContainer>
      <SearchFormInfo>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </SearchFormInfo>
      <SearchFormContent>
        <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
        {isLoading && <AiOutlineLoading size={24} />}
      </SearchFormContent>
      {
        posts.length === 0 && query && query.trim() !== "" && (
          <EmptyQueryContainer>
            <TbFileSearch size={32} />
            <h3>Nenhum resultado para "<strong>{query}</strong>"</h3>
          </EmptyQueryContainer>
        )
      }
    </SearchFormContainer>
  )
}
